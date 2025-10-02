import { Order } from "blockly/javascript";

export const divideBlock = {
	init : function() {
		this.jsonInit({
			"type": "divide",
			"message0": "%1 ÷ %2",
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

export const divideGenerator = function (block, generator) {
	return [
    JSON.stringify({
      type: 'div',
      left: generator.valueToCode(block, 'A', Order.NONE),
      right: generator.valueToCode(block, 'B', Order.NONE) 
    }),
    Order.NONE
  ];
}