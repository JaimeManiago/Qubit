export const absBlock = {
	init : function() {
		this.jsonInit({
			"type": "abs",
			"message0": "| %1 |",
			"args0": [
				{
					"type": "input_value",
					"name": "X",
          "check": "Number"
				}
			],
      "output": "Number",
			"tooltip": "returns the absolute value of the input"
		});
	}
}

export const absGenerator = function (block, generator) {
	return `console.log('hello');\n`
}