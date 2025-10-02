export const expBlock = {
	init : function() {
		this.jsonInit({
			"type": "exp",
			"message0": "%1 ^ %2",
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

export const expGenerator = function (block, generator) {
	return [
    JSON.stringify({
      type: 'exp',
      left: generator.valueToCode(block, 'A', Order.NONE),
      right: generator.valueToCode(block, 'B', Order.NONE) 
    }),
    Order.NONE
  ];
}