import { Order } from "blockly/javascript";

export const isltBlock = {
	init : function() {
		this.jsonInit({
			"type": "islt",
			"message0": "%1 is less than %2",
			"args0": [
				{
					"type": "input_value",
					"name": "A"
				},
        {
          "type": "input_value",
          "name": "B"
        }
			],
      "output": "Boolean",
			"tooltip": "skibidi",
      "inputsInline": true
		});
	}
}

export const isltGenerator = function (block, generator) {
	return [
    `(ilt,${
      generator.valueToCode(block, 'A', Order.NONE)
    },${
      generator.valueToCode(block, 'B', Order.NONE)
    })`,
    Order.NONE
  ];
}