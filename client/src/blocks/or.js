import { Order } from "blockly/javascript";

export const orBlock = {
	init : function() {
		this.jsonInit({
			"type": "or",
			"message0": "%1 or %2",
			"args0": [
				{
					"type": "input_value",
					"name": "A",
          "check": "Boolean"
				},
        {
          "type": "input_value",
          "name": "B",
          "check": "Boolean"
        }
			],
      "output": "Boolean",
			"tooltip": "skibidi",
      "inputsInline": true
		});
	}
}

export const orGenerator = function (block, generator) {
  return [
    `or,`+
    `${generator.valueToCode(block, 'A', Order.NONE) == 'true'},`+
    `${generator.valueToCode(block, 'B', Order.NONE) == 'true'}`,
    Order.NONE
  ];
}