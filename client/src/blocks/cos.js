import { Order } from "blockly/javascript";

export const cosBlock = {
	init : function() {
		this.jsonInit({
			"type": "cos",
			"message0": "cosine %1",
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

export const cosGenerator = function (block, generator) {
	return [
    JSON.stringify({
      type: 'cos',
      x: generator.valueToCode(block, 'X', Order.NONE)
    }),
    Order.NONE
  ];
}