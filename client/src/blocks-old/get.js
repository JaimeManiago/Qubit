import { Order } from "blockly/javascript";

export const getBlock = {
	init : function() {
		this.jsonInit({
			"type": "get",
			"message0": "get %1",
			"args0": [
				{
					"type": "input_value",
					"name": "VAR",
          "check": "String"
				}
			],
      "output": true,
			"tooltip": "rounds down the input"
		});
	}
}

export const getGenerator = function (block, generator) {
	return [
    `(get,${
      generator.valueToCode(block, 'VAR', Order.NONE)
    })`,
    Order.NONE
  ];
}