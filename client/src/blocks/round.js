export const roundBlock = {
	init : function() {
		this.jsonInit({
			"type": "round",
			"message0": "round off %1",
			"args0": [
        {
          "type": "input_value",
          "name": "NUM",
          "check": "Number"
        }
			],
      "output": "Number",
			"tooltip": "skibidi"
		});
	}
}

export const roundGenerator = function (block, generator) {
	return [
    `rnd,`+
    `${generator.valueToCode(block, 'X', Order.NONE)|| 0}`,
    Order.NONE
  ];
}