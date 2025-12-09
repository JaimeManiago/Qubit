import { useState, useEffect, useRef } from 'react'
import './App.css'
import * as Blockly from 'blockly'
import workspaceJSON from './workspace.json'
import { registerBlocks } from './blocks/blockRegistry'
import { javascriptGenerator } from 'blockly/javascript'
import Popup from 'reactjs-popup'
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import Histogram from "./components/Histogram";
import Circuit from "./components/Circuit"
import QuantumCircuit from 'quantum-circuit'
import InfoPanel from './components/InfoPanel'

registerBlocks();
Chart.register(CategoryScale);

function App() {

  /* DYNAMIC DATA SETUP */
  // Quantum circuit visualization
  const [ qc, setQc ] = useState({
    qubits:0,
    gates:[]
  });
  // Chart data
  const [chartData, setChartData] = useState({
    labels: [], 
    datasets: [
      {
        label: "Probability ",
        data: [],
        backgroundColor: [
          "#70c6dbff"
        ],
        borderColor: "black",
        borderWidth: 1
      }
    ]
  });
  // Information panel
  const [ selectedGate, setSelectedGate ] = useState(null);
  const [ amplitudes, setAmplitudes ] = useState([]);



  /* CODE GENERATION */
  function compile(event) {
    console.log("\n");

    // check for the right Blockly event
    if (!(event.type == Blockly.Events.BLOCK_MOVE || event.type == Blockly.Events.BLOCK_CHANGE)) return;

    const codeStr = javascriptGenerator.workspaceToCode(workspaceRef.current);
    if (codeStr.length==0) {
      setSelectedGate(null);
      setAmplitudes([]);
      setQc({qubits:0,gates:[]});
      setChartData(prevData => ({
        ...prevData,
        labels: [],
        datasets: prevData.datasets.map(dataset => ({
          ...dataset,
          data: []
        }))
      }))
      return;
    }

    // Manipulate code string
    const [ q, code ] = codeStr.split('\n').filter(str => str.includes(';'))[0].split(';');
    var gates = JSON.parse(`[${code.slice(0,-1)}]`);
    
    console.log(gates);

    // Set gate columns
    for (let i=0; i<gates.length; i++) {
      gates[i].column = i;
    }

    // Set quantum circuit visualizer args
    setQc({qubits: q, gates:gates});

    /* RUNNING QUANTUM CIRCUIT */
    var circuit = new QuantumCircuit(q);
    for (const {type, wires, params: {theta="0", phi="0", lambda="0"}} of gates) {
      circuit.appendGate(
        type.toLowerCase(),
        wires,
        {
          "params": {
            "theta": theta+"pi",
            "phi": phi+"pi",
            "lambda": lambda+"pi",
          }
        }
      );
    }

    circuit.run();
    var s = circuit.stateAsString(false).split(/[\n\t|> %]/).filter(Boolean);
    const states = [];
    const probs = [];
    setAmplitudes([])

    for (let i=0; i<s.length; i+=3) {
      setAmplitudes((prev) => [...prev, s[i]]);
      states.push(`|${s[i+1]}⟩`);
      probs.push(s[i+2]);
    }

    setChartData(prevData => ({
      ...prevData,
      labels: states,
      datasets: prevData.datasets.map(dataset => ({
        ...dataset,
        data: probs
      }))
    }));

    console.log(s);
  }

  const gateClick = (gate) => {
    setSelectedGate(gate);
  }

  /* BLOCKLY INJECTION */
  const coreRef = useRef(null);
  const workspaceRef = useRef(null);

  useEffect(() => {
    workspaceRef.current = Blockly.inject(coreRef.current, workspaceJSON);

    const handleResize = () => Blockly.svgResize(workspaceRef.current);
    window.addEventListener("resize", handleResize);

    workspaceRef.current.addChangeListener(compile);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      workspaceRef.current?.dispose();
    };
  }, []);



  return (
    <>
      <div id="code" ref={coreRef}></div>
      <Circuit 
        numQubits={qc.qubits} // Test vertical scroll with many qubits
        gates={qc.gates} 
        containerWidth={800} // Override defaults
        containerHeight={300}
        onDataSubmit = {gateClick}
      />
      <InfoPanel gate={selectedGate} stateVector={amplitudes}/>
      <Histogram chartData={chartData} />
    </>
  );
}

export default App