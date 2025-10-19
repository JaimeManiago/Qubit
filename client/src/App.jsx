import { useState, useEffect, useRef } from 'react'
import './App.css'
import * as Blockly from 'blockly'
import workspaceJSON from './workspace.json'
import { registerBlocks } from './blocks/blockRegistry'
import { javascriptGenerator } from 'blockly/javascript'
import Popup from 'reactjs-popup'

registerBlocks();

function App() {

  /* BLOCKLY INJECTION */
  const coreRef = useRef(null);
  const workspaceRef = useRef(null)

  useEffect(() => {
    workspaceRef.current = Blockly.inject(coreRef.current, workspaceJSON);

    const handleResize = () => Blockly.svgResize(workspaceRef.current);
    window.addEventListener("resize", handleResize);
    

    return () => {
      window.removeEventListener("resize", handleResize);
      workspaceRef.current?.dispose();
    };
  }, []);


  /* RUN LOG */
  const [ logs, setLogs ] = useState([]);
  /*const consoleFloor = useRef(null);

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

        <div id="circuit"></div>
        <div id="graph"></div>

      </div>
    </>
  )
}

export default App