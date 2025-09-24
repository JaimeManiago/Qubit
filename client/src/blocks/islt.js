export const isltBlock = {
	init : function() {
		this.jsonInit({
			"type": "islt",
			"message0": "%1 is less than %2",
			"args0": [
				{
					"type": "input_value",
					"name": "A",
          "check": "Boolean"
				},
        {
          "type": "input_value",
          "name": "B",
          "check": "Boolean"
        }
			],
      "output": "Boolean",
			"tooltip": "skibidi",
      "inputsInline": true
		});
	}
}

export const isltGenerator = function (block, generator) {
	return `console.log('hello');\n`
}