import { InlineMath  } from "react-katex";
import 'katex/dist/katex.min.css';

const gates = {
  "H": {
    name: "Hadamard",
    description: `
      The Hadamard gate is one of the fundamental
      gates of quantum computing that creates
      superposition.\n
      It follows the transformation:
      X→Z
      Y→-Y
      Z→X
    `,
    matrixLatex: `
      \\begin{pmatrix} 
        \\frac{1}{\\sqrt{2}} & \\frac{1}{\\sqrt{2}} \\\\
        \\frac{1}{\\sqrt{2}} & -\\frac{1}{\\sqrt{2}}
      \\end{pmatrix}
    `
  },
  "X": {
    name: "Pauli-X",
    description: `
    
    `,
    matrixLatex: `
      \\begin{pmatrix}
        
      \\end{pmatrix}
    `
  },
  "Y": {
    name: "Pauli-Y",
    description: `
    
    `,
    matrixLatex: `
      \\begin{pmatrix}
        
      \\end{pmatrix}
    `
  },
  "Z": {
    name: "Pauli-Z",
    description: `
    
    `,
    matrixLatex: `
      \\begin{pmatrix}
        
      \\end{pmatrix}
    `
  }
}

const InfoPanel = ({ gate, stateVector }) => {

  return (
    <div id="info">
      {
        gate ? (
          <div>
            <h1 id="gate-header">{gates[gate].name} Gate</h1>
            <div style={{ whiteSpace: 'pre' }}>{gates[gate].description}</div>
            <div style={{ marginLeft: '25px' }}>
               Matrix representation:
              <div style={{marginTop: '10px', marginLeft: '110px'}}><InlineMath math={gates[gate].matrixLatex} /> </div>
            </div>
          </div>

        ) : (
          
          <div id="qubit-info">{/*
             Statevector and circuit information
            <pre>{JSON.stringify(stateVector,null,2)}</pre>
            */}
            A qubit is the fundamental unit of quantum information.
            Unlike a classical bit that can only be a 0 or 1,
            a qubit can exist in both states simultaneously.
            <br></br>
            <br></br>
            A qubit state is visually represented on the Bloch Sphere - a unit sphere where:
            <ul id="infoList">
              <li><strong>North Pole</strong> - represents the state 0</li>
              <li><strong>South Pole</strong> - represents the state 1</li>
            </ul>
            When the state is anywhere else on the Bloch sphere, it represents a state where it is not fully 0 or 1.

            <img src="blochsphere.png" alt="" />

            The qubit state can rotate about the different axes with the use of quantum gates.
          </div>
        )
      }
    </div>
  )
};

export default InfoPanel;