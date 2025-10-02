export const foreverBlock = {
	init : function() {
		this.jsonInit({
			"type": "forever",
			"message0": "forever",
			"message1": "do %1",
			"args1": [
				{
					"type": "input_statement",
					"name": "CODE"
				}
			],
			"previousStatement": null,
			"tooltip": "repeat the block of code inside forever"
		});
	}
}

export const foreverGenerator = function (block, generator) {
	return [
    JSON.stringify({
      type: '4ever',
      code: generator.valueToCode(block, 'CODE', Order.NONE) 
    }),
    Order.NONE
  ];
}