export const logBlock = {
	init : function() {
		this.jsonInit({
			"type": "log",
			"message0": "log %1 %2",
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
      "inputsInline": false
		});
	}
}

export const logGenerator = function (block, generator) {
	return [
    `log,`+
    `${generator.valueToCode(block, 'A', Order.NONE) || 0},`+
    `${generator.valueToCode(block, 'B', Order.NONE) || 0}`,
    Order.NONE
  ]
}