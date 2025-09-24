export const sinhBlock = {
	init : function() {
		this.jsonInit({
			"type": "sinh",
			"message0": "hyperbolic sine %1",
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

export const sinhGenerator = function (block, generator) {
	return `console.log('hello');\n`
}