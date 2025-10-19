import { Order } from "blockly/javascript";

export const ceilBlock = {
	init : function() {
		this.jsonInit({
			"type": "ceil",
			"message0": "⌈%1⌉",
			"args0": [
				{
					"type": "input_value",
					"name": "X",
          "check": "Number"
				}
			],
      "output": "Number",
			"tooltip": "rounds up the input"
		});
	}
}

export const ceilGenerator = function (block, generator) {
	return [
    `(cei,${
      generator.valueToCode(block, 'X', Order.NONE)
    })`,
    Order.NONE
  ];
}