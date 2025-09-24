export const ifBlock = {
	init : function() {
		this.jsonInit({
			"type": "if",
			"message0": "if %1",
      "args0": [
        {
          "type": "input_value",
          "name": "condition",
          "check": "Boolean"
        }
      ],
			"message1": "%1",
			"args1": [
				{
					"type": "input_statement",
					"name": "if_code"
				}
			],
			"message2": "else",
			"message3": "%1",
			"args3": [
				{
					"type": "input_statement",
					"name": "else_code"
				}
			],
			"previousStatement": null,
			"nextStatement": null,
      "inputsInline": false,
			"tooltip": "skibidi"
		});
	}
}

export const ifGenerator = function (block, generator) {
	return `console.log('hello');\n`
}