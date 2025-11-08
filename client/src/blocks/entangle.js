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
  return `e ${block.getFieldValue('X')},${block.getFieldValue('Y')};`;
}