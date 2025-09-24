export const cosBlock = {
	init : function() {
		this.jsonInit({
			"type": "cos",
			"message0": "cosine %1",
			"args0": [
				{
					"type": "input_value",
					"name": "X",
          "check": "Number"
				}
			],
      "output": "Number",
			"tooltip": "skibidi"
		});
	}
}

export const cosGenerator = function (block, generator) {
	return `console.log('hello');\n`
}