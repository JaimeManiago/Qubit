import { Order } from "blockly/javascript";

export const sinBlock = {
	init : function() {
		this.jsonInit({
			"type": "sin",
			"message0": "sine %1",
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

export const sinGenerator = function (block, generator) {
	return [
    `(sin,${
      generator.valueToCode(block, 'A', Order.NONE)
    },${
      generator.valueToCode(block, 'B', Order.NONE)
    })`,
    Order.NONE
  ];
}