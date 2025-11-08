export const hadamardBlock = {
	init : function() {
		this.jsonInit({
			"type": "hadamard",
			"message0": "superpose qubit %1",
			"args0": [
				{
					"type": "field_number",
					"name": "X",
				}
			],
			"previousStatement": null,
			"nextStatement": null,
			"tooltip": "applies the hadamard gate to the qubit"
		});
	}
}

export const hadamardGenerator = function (block, generator) {
  return `h ${block.getFieldValue('X')};`;
}