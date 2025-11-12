import React from 'react';

const Circuit = ({ 
  numQubits = 3, 
  gates = [], 
  containerWidth = 600, 
  containerHeight = 400 
}) => {
  const wireSpacing = 50; // Vertical space between qubits
  const gateSize = 40; // Gate box size
  const columnWidth = 60; // Space per time step column
  const labelPadding = 50; // Padding for qubit labels on left
  const endPadding = 20; // Padding on right
  const maxColumns = gates.length > 0 ? Math.max(...gates.map(g => g.column)) + 2 : 5; // Min columns if no gates
  const circuitWidth = labelPadding + maxColumns * columnWidth + endPadding;
  const circuitHeight = numQubits * wireSpacing + 20;

  // Helper to get x-position for a column (after label padding)
  const getX = (col) => labelPadding + (col + 1) * columnWidth;

  // Helper to format parameters (e.g., convert numbers to strings, handle π)
  const formatParam = (param) => {
    if (typeof param === 'number') {
      if (param === Math.PI) return 'π';
      if (param === Math.PI / 2) return 'π/2';
      if (param === Math.PI / 4) return 'π/4';
      // Add more common fractions as needed
      return param.toFixed(2); // Default to 2 decimal places
    }
    return param.toString();
  };

  // Render a single gate
  const renderGate = (gate) => {
    const { type, qubits, column, params = [] } = gate;
    const x = getX(column);
    const elements = [];

    if (qubits.length === 1) {
      // Single-qubit gate: box with text, append params if any
      const y = qubits[0] * wireSpacing + wireSpacing / 2;
      let label = type;
      if (params.length > 0) {
        label += `(${params.map(formatParam).join(', ')})`;
      }
      elements.push(
        <rect key={`${type}-box-${column}`} x={x - gateSize / 2} y={y - gateSize / 2} width={gateSize} height={gateSize} fill="lightblue" stroke="blue" rx="5" />,
        <text key={`${type}-text-${column}`} x={x} y={y + 5} textAnchor="middle" fill="black" fontSize="14">{label}</text>
      );
    } else if (qubits.length === 2 && (type === 'CNOT' || type === 'CX')) {
      // CNOT/CX: control dot, target circle, connecting line (no params for now)
      const controlY = qubits[0] * wireSpacing + wireSpacing / 2;
      const targetY = qubits[1] * wireSpacing + wireSpacing / 2;
      const minY = Math.min(controlY, targetY);
      const maxY = Math.max(controlY, targetY);

      elements.push(
        // Control dot (filled circle)
        <circle key={`control-${column}`} cx={x} cy={controlY} r="5" fill="black" />,
        // Target circle (open with + inside for CNOT/CX)
        <circle key={`target-${column}`} cx={x} cy={targetY} r="10" fill="none" stroke="black" strokeWidth="2" />,
        <text key={`target-text-${column}`} x={x} y={targetY + 5} textAnchor="middle" fill="black" fontSize="14">+</text>, // Simple + for target
        // Vertical line connecting them
        <line key={`connector-${column}`} x1={x} y1={minY} x2={x} y2={maxY} stroke="black" strokeWidth="2" />
      );
    } else if (qubits.length === 2 && type === 'CRX') {
      // Example controlled parameterized gate like CRX(θ): control dot, target RX box, connecting line
      const controlY = qubits[0] * wireSpacing + wireSpacing / 2;
      const targetY = qubits[1] * wireSpacing + wireSpacing / 2;
      const minY = Math.min(controlY, targetY);
      const maxY = Math.max(controlY, targetY);

      let targetLabel = 'RX';
      if (params.length > 0) {
        targetLabel += `(${params.map(formatParam).join(', ')})`;
      }

      elements.push(
        // Control dot
        <circle key={`control-${column}`} cx={x} cy={controlY} r="5" fill="black" />,
        // Target box
        <rect key={`target-box-${column}`} x={x - gateSize / 2} y={targetY - gateSize / 2} width={gateSize} height={gateSize} fill="lightgreen" stroke="green" rx="5" />,
        <text key={`target-text-${column}`} x={x} y={targetY + 5} textAnchor="middle" fill="black" fontSize="12">{targetLabel}</text>,
        // Connecting line
        <line key={`connector-${column}`} x1={x} y1={minY} x2={x} y2={maxY} stroke="black" strokeWidth="2" />
      );
    }
    // Add more gate types (e.g., RY, RZ, CU, SWAP, etc.) by extending this logic

    return elements;
  };

  return (
    <div id="circuit">
      <svg width={circuitWidth} height={circuitHeight}>
        {/* Qubit wires: horizontal lines, spanning full circuit width */}
        {Array.from({ length: numQubits }).map((_, i) => (
          <g key={`qubit-${i}`}>
            <line 
              x1={labelPadding / 2} 
              y1={i * wireSpacing + wireSpacing / 2} 
              x2={circuitWidth - endPadding} 
              y2={i * wireSpacing + wireSpacing / 2} 
              stroke="black" 
              strokeWidth="1" 
            />
            <text x={10} y={i * wireSpacing + wireSpacing / 2 - 5} fontSize="12">[{i}]</text>
          </g>
        ))}
        {/* Render all gates */}
        {gates.flatMap(renderGate)}
      </svg>
    </div>
  );
};

export default Circuit;