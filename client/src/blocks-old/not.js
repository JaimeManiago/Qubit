import { Order } from "blockly/javascript";

export const notBlock = {
	init : function() {
		this.jsonInit({
			"type": "not",
			"message0": "not %1",
			"args0": [
        {
          "type": "input_value",
          "name": "X",
          "check": "Boolean"
        }
			],
      "output": "Boolean",
			"tooltip": "skibidi"
		});
	}
}

export const notGenerator = function (block, generator) {
  return [
    `(not,${
      generator.valueToCode(block, 'X', Order.NONE)
    })`,
    Order.NONE
  ];
}