import { Order } from "blockly/javascript";

export const multBlock = {
	init : function() {
		this.jsonInit({
			"type": "mult",
			"message0": "%1 * %2",
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

export const multGenerator = function (block, generator) {
	return [
    `mlt,`+
    `${generator.valueToCode(block, 'A', Order.NONE) || 0},`+
    `${generator.valueToCode(block, 'B', Order.NONE) || 0}`,
    Order.NONE
  ];
}