export const isgtBlock = {
	init : function() {
		this.jsonInit({
			"type": "isgt",
			"message0": "%1 is greater than %2",
			"args0": [
				{
					"type": "input_value",
					"name": "A"
				},
        {
          "type": "input_value",
          "name": "B"
        }
			],
      "output": "Boolean",
			"tooltip": "skibidi",
      "inputsInline": true
		});
	}
}

export const isgtGenerator = function (block, generator) {
	return [
    `igt,`+
    `${generator.valueToCode(block, 'A', Order.NONE)},`
    `${generator.valueToCode(block, 'B', Order.NONE)}`,
    Order.NONE
  ];
}