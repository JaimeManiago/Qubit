export const whileBlock = {
	init : function() {
		this.jsonInit({
			"type": "while",
			"message0": "repeat until %1",
			"args0": [
				{
					"type": "input_value",
					"name": "COND",
          "check": "Boolean"
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

export const whileGenerator = function (block, generator) {
	return `console.log('hello');\n`
}