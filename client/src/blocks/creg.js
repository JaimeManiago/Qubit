export const cregBlock = {
	init : function() {
		this.jsonInit({
			"type": "creg",
			"message0": "classical register with %1 bits",
			"args0": [
				{
					"type": "field_number",
					"name": "X",
          "precision": 1
				}
			],
      "output": true,
			"tooltip": "skibidi"
		});
	}
}

export const cregGenerator = function (block, generator) {
	return [
    JSON.stringify({
      type: 'creg',
      n: generator.valueToCode(block, 'X', Order.NONE)
    }),
    Order.NONE
  ];
}