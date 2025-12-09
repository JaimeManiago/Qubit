export const rotate_zBlock = {
	init : function() {
		this.jsonInit({
			"type": "rotate_z",
			"message0": "rotate qubit %1 about the z-axis by %2 π radians",
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
			"tooltip": "applies the Rotation-Z gate to the qubit"
		});
	}
}

export const rotate_zGenerator = function (block, generator) {
  return JSON.stringify({
    type: 'RZ',
    wires: [parseInt(block.getFieldValue('X'))],
    params: {phi: block.getFieldValue('Y')}
  }) + ',';
}