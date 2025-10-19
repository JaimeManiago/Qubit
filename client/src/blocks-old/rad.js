import { Order } from "blockly/javascript";

export const radBlock = {
	init : function() {
		this.jsonInit({
			"type": "rad",
			"message0": "%1 √ %2",
			"args0": [
				{
					"type": "input_value",
					"name": "A",
          "check": "Number"
				},
        {
          "type": "input_value",
          "name": "B",
          "check": "Number"
        }
			],
      "output": "Number",
			"tooltip": "skibidi",
      "inputsInline": true
		});
	}
}

export const radGenerator = function (block, generator) {
	return [
    `(add,${
      generator.valueToCode(block, 'A', Order.NONE)
    },${
      generator.valueToCode(block, 'B', Order.NONE)
    })`,
    Order.NONE
  ];
}