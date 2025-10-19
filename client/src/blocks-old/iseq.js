import { Order } from "blockly/javascript";

export const iseqBlock = {
	init : function() {
		this.jsonInit({
			"type": "iseq",
			"message0": "%1 is equal to %2",
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

export const iseqGenerator = function (block, generator) {
	return [
    `(iet,${
      generator.valueToCode(block, 'A', Order.NONE)
    },${
      generator.valueToCode(block, 'B', Order.NONE)
    })`,
    Order.NONE
  ];
}