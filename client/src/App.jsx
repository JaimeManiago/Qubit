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

registerBlocks();
Chart.register(CategoryScale)

const Data = [
  {
    id: 1,
    year: "|00⟩",
    userGain: 50
  },
  {
    id: 2,
    year: "|01⟩",
    userGain: 0
  },
  {
    id: 3,
    year: "|10⟩",
    userGain: 0
  },
  {
    id: 4,
    year: "|11⟩",
    userGain: 50
  }
];

function App() {

  /* CIRCUIT SETUP */
  const [ qc, setQc ] = useState({
    qubits: 0,
    gates: []
  });


  /* CODE GENERATION */
  


  /* BLOCKLY INJECTION */
  const coreRef = useRef(null);
  const workspaceRef = useRef(null);


  useEffect(() => {
    workspaceRef.current = Blockly.inject(coreRef.current, workspaceJSON);

    const handleResize = () => Blockly.svgResize(workspaceRef.current);
    window.addEventListener("resize", handleResize);


    /*
    workspaceRef.current.addChangeListener(function (event) {
      if (event.type == Blockly.Events.BLOCK_CREATE) {
        if (workspaceRef.current
              .getAllBlocks(false)
              .filter(b=>b.type === 'set_qubit')
              .length > 1) {
          const blk = workspaceRef.current.getBlockById(event.blockId);
          if (blk.type === 'set_qubit') {
            blk.dispose(true);
            alert("Only one qubit initializer block is allowed");
            return;
          }
        }
        
      }
      if (event.type == Blockly.Events.BLOCK_CHANGE  || event.type == Blockly.Events.BLOCK_MOVE) {
        const code = javascriptGenerator
                      .workspaceToCode(workspaceRef.current)
                      .split('\n')
                      .filter(line => line.startsWith('q'))[0]
                      .split(';')
                      .map(line => line.split(' '))
                      .slice(0,-1);
        console.log(code);

        setQc({qubits:0,gates:[]});
        
        code.forEach((line, idx) => {
          if (line[0] == 'q') {
            setQc(prev => ({...prev, qubits: parseInt(line[1])}))
          }
          else if (line[0] == 'h') {
            setQc(prev => ({
              ...prev,
              gates: [...prev.gates, { type: 'H', targets: ['q'+line[1]], position: 0 }]
            }));
          }
        });

        /*setQc(prev => ({
          ...prev,
          gates: [...prev.gates, { type: 'H', targets: ['q0'], position: 0 }]
        }));
      }
    }




  );*/
    

    return () => {
      window.removeEventListener("resize", handleResize);
      workspaceRef.current?.dispose();
    };
  }, []);


  /* CHART SETUP */
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year), 
    datasets: [
      {
        label: "Probability ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "#70c6dbff"
        ],
        borderColor: "black",
        borderWidth: 1
      }
    ]
  });


  /* RUN LOG 
  const [ logs, setLogs ] = useState([]);
  const consoleFloor = useRef(null);

  const [rt, setRt] = useState(true);
  const [tsStart, setTsStart] = useState(true);
  const [tsEnd, setTsEnd] = useState(true);
  const [autoClear, setAutoClear] = useState(false);

  useEffect(() => {
    consoleFloor.current?.scrollIntoView({behavior:"smooth"});
  }, [logs])*/



  /* RUN BUTON CODE */
  /*function runCode(wsCode) {

    // process data
    const toSend = `{"threads": [${wsCode
      .split('\n')
      .filter((code) => {
        return( code.startsWith("S") && code.length>1);
      })
      .map(thread => `{"code":[${thread.slice(1,-1)}]}`)
    }]}`;
    
    console.log(wsCode);
    console.log(toSend);

    try {
      console.log(JSON.parse(toSend));
    } catch (error) {
      console.log('invalid json');
    } 

    // log duties
    const start = new Date()
    if (autoClear) setLogs([]);
    else setLogs(prev => [...prev, `-`]);
    if (tsStart) setLogs(prev => [...prev, `[${start.toLocaleString()}] Program start`]);


    // sending code to backend - NO USE
    fetch("http://localhost:5555/api",  {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(toSend)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network Error');
      }
      return response.json();
    })
    .then(output => {
      output.text.forEach((str, i) => setLogs(prev => [...prev, str]));

      // log duties
      const end = new Date();
      if (tsEnd) setLogs(prev => [...prev, `[${end.toLocaleString()}] Program end`]);
      if (rt) setLogs(prev => [...prev, `Executed in ${end-start}ms`]);
    })
    .catch(error => {
      console.error('Error: ',error);

      // log duties
      const end = new Date();
      if (tsEnd) setLogs(prev => [...prev, `[${end.toLocaleString()}] Program end`]);
      if (rt) setLogs(prev => [...prev, `Executed in ${end-start}ms`]);
    })
  }*/

  return (
    <>
      <div id="core" ref={coreRef}></div>
      <div id="orbit">

        <Circuit 
        numQubits={10} // Test vertical scroll with many qubits
        gates={[
          { type: 'H', qubits: [0], column: 0 },
          { type: 'RX', qubits: [1], column: 1, params: [Math.PI / 2] }, // RX(π/2)
          { type: 'CNOT', qubits: [0, 1], column: 2 },
          { type: 'CRX', qubits: [0, 2], column: 3, params: [Math.PI] }, // CRX(π) as example
          { type: 'RX', qubits: [2], column: 0, params: [1.57] }
        ]} 
        containerWidth={800} // Override defaults
        containerHeight={300}
      />
        <Histogram chartData={chartData} />

      </div>
    </>
  );
}

export default App