export const orBlock = {
	init : function() {
		this.jsonInit({
			"type": "or",
			"message0": "%1 or %2",
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

export const orGenerator = function (block, generator) {
	return `console.log('hello');\n`
}