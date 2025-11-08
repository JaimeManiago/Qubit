export const pauli_xBlock = {
	init : function() {
		this.jsonInit({
			"type": "pauli_x",
			"message0": "flip qubit %1 about the x-axis",
			"args0": [
				{
					"type": "field_number",
					"name": "X"
				}
			],
			"previousStatement": null,
			"nextStatement": null,
			"tooltip": "applies the Pauli-X gate to the qubit"
		});
	}
}

export const pauli_xGenerator = function (block, generator) {
  return `x ${block.getFieldValue('X')};`;
}