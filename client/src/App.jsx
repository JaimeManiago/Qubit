import { useState, useEffect, useRef } from 'react'
import './App.css'
import * as Blockly from 'blockly'
import workspaceJSON from './workspace.json'
import { registerBlocks } from './blocks/blockRegistry'
import { javascriptGenerator } from 'blockly/javascript'

registerBlocks();

function runCode(toSend) {

  fetch("http://localhost:5000/api",  {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain',
    },
    body: toSend
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network Error');
    }
    return response.json();
  })
  .then(output => {
    console.log(output.console);
  })
  .catch(error => {
    console.error('Error: ',error);
  })
}

function App() {
  const coreRef = useRef(null);
  const workspaceRef = useRef(null)
  const [ response, setResponse ] = useState(null);

  useEffect(() => {
    workspaceRef.current = Blockly.inject(coreRef.current, workspaceJSON);

    const handleResize = () => Blockly.svgResize(workspaceRef.current);
    window.addEventListener("resize", handleResize);
    

    return () => {
      window.removeEventListener("resize", handleResize);
      workspaceRef.current?.dispose();
    };
  }, []);

  return (
    <>
      <div id="core" ref={coreRef}></div>
      <div id="orbit">

        <button id="runBtn" onClick={() => {
          const code = javascriptGenerator.workspaceToCode(workspaceRef.current);
          runCode(code);
        }}>RUN</button>
      </div>
    </>
  )
}

export default App