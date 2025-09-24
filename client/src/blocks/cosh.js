export const coshBlock = {
	init : function() {
		this.jsonInit({
			"type": "cosh",
			"message0": "hyperbolic cosine %1",
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

export const coshGenerator = function (block, generator) {
	return `console.log('hello');\n`
}