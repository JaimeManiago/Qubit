export const randomBlock = {
	init : function() {
		this.jsonInit({
			"type": "random",
			"message0": "random number from %1 to %2",
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

export const randomGenerator = function (block, generator) {
	return `console.log('hello');\n`
}