export const collapseBlock = {
	init : function() {
		this.jsonInit({
			"type": "collapse",
			"message0": "tilt qubit %1 of %2",
			"args0": [
				{
					"type": "field_number",
					"name": "IDX",
          "precision": 1
				},
        {
          "type": "input_value",
          "name": "QREG"
        }
			],
			"previousStatement": null,
			"nextStatement": null,
			"tooltip": "skibidi"
		});
	}
}

export const collapseGenerator = function (block, generator) {
	return `console.log('hello');\n`
}