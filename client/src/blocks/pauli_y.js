export const pauli_yBlock = {
	init : function() {
		this.jsonInit({
			"type": "pauli_y",
			"message0": "flip qubit %1 about the y-axis",
			"args0": [
				{
					"type": "field_number",
					"name": "X"
				}
			],
			"previousStatement": null,
			"nextStatement": null,
			"tooltip": "applies the Pauli-Y gate to the qubit"
		});
	}
}

export const pauli_yGenerator = function (block, generator) {
  return `y ${block.getFieldValue('X')};`;
}