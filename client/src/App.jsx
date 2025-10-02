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
  const consoleFloor = useRef(null);

  const [rt, setRt] = useState(true);
  const [tsStart, setTsStart] = useState(true);
  const [tsEnd, setTsEnd] = useState(true);
  const [autoClear, setAutoClear] = useState(false);

  useEffect(() => {
    consoleFloor.current?.scrollIntoView({behavior:"smooth"});
  }, [logs])



  /* RUN BUTON CODE */
  function runCode(wsCode) {

    console.log(wsCode);
    
    // assertions
    const bro = wsCode
      .split('\n')
      .filter((code) => {
        return code.startsWith("start;");
      })
      .map(str => str.split(';'))
      .reduce((res, arr) => {
        arr.forEach((num, idx) => {
          if(!res[idx]) res[idx]=[];
          res[idx].push(num);
        });
        return res;
      }, [])
      .flat();

    
    const toSend = '';

    // log duties
    const start = new Date()
    if (autoClear) setLogs([]);
    else setLogs(prev => [...prev, `-`]);
    if (tsStart) setLogs(prev => [...prev, `[${start.toLocaleString()}] Program start`]);


    // sending code to backend
    fetch("http://localhost:5000/api",  {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: JSON.stringify(wsCode)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network Error');
      }
      return response.json();
    })
    .then(output => {
      
      setLogs(prev => [...prev, output.text]);

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
  }


  return (
    <>
      <div id="core" ref={coreRef}></div>
      <div id="orbit">

        <button id="runBtn" onClick={() => {
          runCode(javascriptGenerator.workspaceToCode(workspaceRef.current));
        }}>RUN</button>


        <div id="console">

          <div style={{position:"sticky",top:0,background:"white",border:"1px solid"}}>
             Log


            <Popup trigger= {<button id="logCfgBtn">settings</button>} position="left top">
              <div id="logCfg">
                <button onClick={() => {setLogs([])}}>Clear Console</button> <br />
                <button onClick={() => {setAutoClear(prev=>!prev)}}>{autoClear? "✓": "✗"} Clear console before run</button>
                <button onClick={() => {setRt(prev=>!prev)}}>{rt? "✓": "✗"} Total run time</button> <br />
                <button onClick={() => {setTsStart(prev=>!prev)}}>{tsStart? "✓": "✗"} Timestamp at program start</button> <br />
                <button onClick={() => {setTsEnd(prev=>!prev)}}>{tsEnd? "✓": "✗"} Timestamp at program end</button> <br />
              </div>
            </Popup>
          </div>
          {
            logs.map((log, i) => (
              <div key={i}>{log}</div>
            ))
          }
          <div ref={consoleFloor}></div>
        </div>

      </div>
    </>
  )
}

export default App