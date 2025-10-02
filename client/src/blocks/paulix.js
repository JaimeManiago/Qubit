export const paulixBlock = {
	init : function() {
		this.jsonInit({
			"type": "paulix",
			"message0": "tilt qubit %1 by %2 degrees",
			"args0": [
        {
          "type": "input_value",
          "name": "QUBIT"
        },
        {
          "type": "input_value",
          "name": "DEG",
          "check": "Number"
        }
			],
			"previousStatement": null,
			"nextStatement": null,
			"tooltip": "skibidi"
		});
	}
}

export const paulixGenerator = function (block, generator) {
	return `console.log('hello');\n`
}