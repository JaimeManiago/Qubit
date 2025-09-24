export const paulixBlock = {
	init : function() {
		this.jsonInit({
			"type": "paulix",
			"message0": "tilt qubit %1",
			"args0": [
        {
          "type": "input_value",
          "name": "QUBIT"
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