export const defineBlock = {
	init : function() {
		this.jsonInit({
			"type": "define",
			"message0": "define a block %1 %2",
			"args0": [
				{
					"type": "input_value",
					"name": "NAME",
          "check": "String"
				},
        {
          "type": "input_value",
          "name": "ARGS"
        }
			],
      "message1": "%1",
      "args1": [
				{
					"type": "input_statement",
					"name": "CODE"
				}
			],
			"tooltip": "skibidi"
		});
	}
}

export const defineGenerator = function (block, generator) {
	return [
    JSON.stringify({
      type: 'def',
      name: generator.valueToCode(block, 'BLOCK', Order.NONE),
      args: generator.valueToCode(block, 'ARGS', Order.NONE),
      code: generator.valueToCode(block, 'CODE', Order.NONE) 
    }),
    Order.NONE
  ];
}