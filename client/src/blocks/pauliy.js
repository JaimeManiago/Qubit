export const pauliyBlock = {
	init : function() {
		this.jsonInit({
			"type": "pauliy",
			"message0": "turn qubit %1",
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

export const pauliyGenerator = function (block, generator) {
	return `console.log('hello');\n`
}