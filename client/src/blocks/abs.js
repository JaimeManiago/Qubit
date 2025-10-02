import { Order } from "blockly/javascript";

export const absBlock = {
	init : function() {
		this.jsonInit({
			"type": "abs",
			"message0": "| %1 |",
			"args0": [
				{
					"type": "input_value",
					"name": "X",
          "check": "Number"
				}
			],
      "output": "Number",
			"tooltip": "returns the absolute value of the input"
		});
	}
}

export const absGenerator = function (block, generator) {
  return [
    JSON.stringify({
      type: 'abs',
      x: generator.valueToCode(block, 'X', Order.NONE)
    }),
    Order.NONE
  ];
}