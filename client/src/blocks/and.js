export const andBlock = {
	init : function() {
		this.jsonInit({
			"type": "and",
			"message0": "%1 and %2",
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

export const andGenerator = function (block, generator) {
	return `console.log('hello');\n`
}