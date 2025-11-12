export const resetBlock = {
	init : function() {
		this.jsonInit({
			"type": "reset",
			"message0": "reset qubit %1",
			"args0": [
				{
					"type": "field_number",
					"name": "X"
				}
			],
			"previousStatement": null,
			"nextStatement": null,
			"tooltip": "sets the qubit's state to |0>"
		});
	}
}

export const resetGenerator = function (block, generator) {
  return `r ${block.getFieldValue('X')};`;
}