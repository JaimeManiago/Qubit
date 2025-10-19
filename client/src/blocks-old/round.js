import { Order } from "blockly/javascript";

export const roundBlock = {
	init : function() {
		this.jsonInit({
			"type": "round",
			"message0": "round off %1",
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

export const roundGenerator = function (block, generator) {
	return [
    JSON.stringify({
      type: 'rnd',
      x: generator.valueToCode(block, 'X', Order.NONE)
    }),
    Order.NONE
  ];
}