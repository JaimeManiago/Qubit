export const rotate_xBlock = {
	init : function() {
		this.jsonInit({
			"type": "rotate_x",
			"message0": "rotate qubit %1 about the x-axis by %2 π radians",
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
			"tooltip": "applies the Rotation-X gate to the qubit"
		});
	}
}

export const rotate_xGenerator = function (block, generator) {
  return `e ${generator.getFieldValue('X')},${generator.getFieldValue('Y')}`;
}