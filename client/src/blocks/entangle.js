export const entangleBlock = {
	init : function() {
		this.jsonInit({
			"type": "entangle",
			"message0": "entangle qubits %1 and %2",
			"args0": [
				{
					"type": "field_number",
					"name": "X"
				},
				{
					"type": "field_number",
					"name": "Y"
				}
			],
			"previousStatement": null,
			"nextStatement": null,
			"tooltip": "applies quantum entanglement to the two qubits"
		});
	}
}

export const entangleGenerator = function (block, generator) {
  return JSON.stringify({
    type: 'H',
    wires: [parseInt(block.getFieldValue('X'))],
    params: {}
  }) + ',' + JSON.stringify({
    type: 'CX',
    wires: [parseInt(block.getFieldValue('X')), parseInt(block.getFieldValue('Y'))],
    params: {}
  }) + ',';
}