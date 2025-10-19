import { Order } from "blockly/javascript";

export const sinhBlock = {
	init : function() {
		this.jsonInit({
			"type": "sinh",
			"message0": "hyperbolic sine %1",
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

export const sinhGenerator = function (block, generator) {
	return [
    `(snh,${
      generator.valueToCode(block, 'A', Order.NONE)
    },${
      generator.valueToCode(block, 'B', Order.NONE)
    })`,
    Order.NONE
  ];
}