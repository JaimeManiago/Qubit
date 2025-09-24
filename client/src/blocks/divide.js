export const divideBlock = {
	init : function() {
		this.jsonInit({
			"type": "divide",
			"message0": "%1 ÷ %2",
			"args0": [
				{
					"type": "input_value",
					"name": "A",
          "check": "Number"
				},
        {
          "type": "input_value",
          "name": "B",
          "check": "Number"
        }
			],
      "output": "Number",
			"tooltip": "skibidi",
      "inputsInline": true
		});
	}
}

export const divideGenerator = function (block, generator) {
	return `console.log('hello');\n`
}