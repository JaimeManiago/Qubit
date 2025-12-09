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
			"previousStatement": null,
			"nextStatement": null,
			"tooltip": "applies the Rotation-X gate to the qubit"
		});
	}
}

export const rotate_xGenerator = function (block, generator) {
  return JSON.stringify({
    type: 'RX',
    wires: [parseInt(block.getFieldValue('X'))],
    params: {theta: block.getFieldValue('Y')}
  }) + ',';
}