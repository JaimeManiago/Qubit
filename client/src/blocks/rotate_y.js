export const rotate_yBlock = {
	init : function() {
		this.jsonInit({
			"type": "rotate_y",
			"message0": "rotate qubit %1 about the y-axis by %2 π radians",
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
			"tooltip": "applies the Rotation-Y gate to the qubit"
		});
	}
}

export const rotate_yGenerator = function (block, generator) {
  return `b ${block.getFieldValue('X')},${block.getFieldValue('Y')};`;
}