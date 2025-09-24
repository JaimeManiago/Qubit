export const forBlock = {
	init : function() {
		this.jsonInit({
			"type": "for",
			"message0": "repeat %1 times",
			"args0": [
				{
					"type": "input_value",
					"name": "ITER",
          "check": "Number"
				}
			],
			"message1": "%1",
      "args1": [
				{
					"type": "input_statement",
					"name": "CODE"
				}
			],
			"previousStatement": null,
			"nextStatement": null,
			"tooltip": "skibidi"
		});
	}
}

export const forGenerator = function (block, generator) {
	return `console.log('hello');\n`
}