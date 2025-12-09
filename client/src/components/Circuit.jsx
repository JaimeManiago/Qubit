import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Circuit = ({ 
  numQubits = 3, 
  gates = [], 
  containerWidth = 600, 
  containerHeight = 400,
  onDataSubmit
}) => {
  const wireSpacing = 67; // Vertical space between qubits
  const gateSize = 40; // Gate box size
  const columnWidth = 60; // Space per time step column
  const endPadding = 10; // Padding on right
  const maxColumns = gates.length > 0 ? Math.max(...gates.map(g => g.column)) + 2 : 1; // Min columns if no gates
  const circuitWidth = maxColumns * columnWidth + endPadding;
  const circuitHeight = numQubits * wireSpacing + 20;
  const offsetX = 20;

  

  // Render a single gate
  const renderGate = (gate) => {
    const { type, column, wires, params } = gate;
    const x = (column + 1) * columnWidth;
    const elements = [];
    const onGateClick = () => {
      onDataSubmit(type);
    }
    
    if (wires.length > 1) {

      const minY = Math.min(...wires) * wireSpacing + wireSpacing / 2;
      const maxY = Math.max(...wires) * wireSpacing + wireSpacing / 2;

      elements.push(
        // Vertical line connecting them
        <line key={`connector-${column}`} x1={x+offsetX} y1={minY} x2={x+offsetX} y2={maxY} stroke="black" strokeWidth="2" />
      );

      for (let i=0; i<wires.length-1; i++) {
        elements.push (
          // Control circle
          <circle key={`control-${column}`} cx={x+offsetX} cy={wires[i] * wireSpacing + wireSpacing / 2} r="5" fill="black" />
        )
      }
    }

    if (wires.length > 0) {
      // Single-qubit gate: box with text, append params if any
      const y = wires[wires.length-1] * wireSpacing + wireSpacing / 2;
      
      elements.push(
        <rect key={`${type}-box-${column}`} x={x - gateSize / 2 + offsetX} y={y - gateSize / 2} width={gateSize} height={gateSize} fill="white" stroke="black" rx="5" onClick={onGateClick} />,
        <text key={`${type}-text-${column}`} x={x + offsetX} y={y + 5} textAnchor="middle" fill="black" fontSize="14" onClick={onGateClick}>{type}</text>
      );

      if (params.hasOwnProperty("theta")) {
        elements.push (
          <text x={x+offsetX} y={y+gateSize/2+12} textAnchor="middle" fill="#676767" fontSize="9">{params.theta}π</text>
        )
      }
    }
    
    return elements;
  };

  return (
    <div id="circuit">
      <svg width={circuitWidth} height={circuitHeight}>
        {/* Qubit wires: horizontal lines, spanning full circuit width */}
        {Array.from({ length: numQubits }).map((_, i) => (
          <g key={`qubit-${i}`}>
            <line 
              x1={columnWidth/2 + offsetX} 
              y1={i * wireSpacing + wireSpacing / 2} 
              x2={circuitWidth - endPadding + offsetX} 
              y2={i * wireSpacing + wireSpacing / 2} 
              stroke="black" 
              strokeWidth="1" 
            />
            <text x={7} y={i * wireSpacing + wireSpacing / 2 + 5} fontSize="16">q{i} |0⟩</text>
          </g>
        ))}
        
        {gates.flatMap(renderGate)}

      </svg>

      {/* Tutorial pop-up */}
      <Popup trigger=
        {<button id="qmark"> ? </button>} 
        modal nested>
        {
            close => (
                <div className='modal'>
                    <div className='content'>
                      <h1 id="headerq">Welcome to <strong>Qubloq</strong>!</h1>
                      <div id="instructions">
                        <div id="left">
                          On the left side, click &gt;&gt; to access code blocks!
                          <br></br>
                          <br></br>
                          <br></br>
                          <br></br>
                          <br></br>
                          Drag them into the workspace to create a quantum program
                        </div>
                        <div id="mid">
                          The quantum circuit made from the code will be show in the center panel.<br></br>
                          <br></br>
                          <br></br>
                          <br></br>
                          <br></br>
                          <br></br>
                          Click a quantum gate to learn more about it!
                        </div>
                        <div id="right-top">
                          The gate information appears on the top right panel.
                        </div>
                        <div id="right-bottom">
                          A quantum program can have multiple outcomes!
                          The bottom right panel shows all possible outcomes and their respective probabilities<br></br>
                        </div>
                      </div>
                    </div>
                    <br></br>

                    <div>
                        <button id="closeq" onClick=
                            {() => close()}>
                                Close
                        </button>
                    </div>
                </div>
            )
        }
      </Popup>
    </div>
  );
};

export default Circuit;