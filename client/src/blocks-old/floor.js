import { Order } from "blockly/javascript";

export const floorBlock = {
	init : function() {
		this.jsonInit({
			"type": "floor",
			"message0": "⌊%1⌋",
			"args0": [
				{
					"type": "input_value",
					"name": "X",
          "check": "Number"
				}
			],
      "output": "Number",
			"tooltip": "rounds down the input"
		});
	}
}

export const floorGenerator = function (block, generator) {
	return [
    `(flo,${
      generator.valueToCode(block, 'X', Order.NONE)
    })`,
    Order.NONE
  ];
}