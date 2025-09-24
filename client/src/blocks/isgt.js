export const isgtBlock = {
	init : function() {
		this.jsonInit({
			"type": "isgt",
			"message0": "%1 is greater than %2",
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

export const isgtGenerator = function (block, generator) {
	return `console.log('hello');\n`
}