export const pauli_zBlock = {
	init : function() {
		this.jsonInit({
			"type": "pauli_z",
			"message0": "flip qubit %1 about the z-axis",
			"args0": [
				{
					"type": "field_number",
					"name": "X"
				}
			],
			"previousStatement": null,
			"nextStatement": null,
			"tooltip": "applies the Pauli-Z gate to the qubit"
		});
	}
}

export const pauli_zGenerator = function (block, generator) {
  return `z ${block.getFieldValue('X')};`;
}