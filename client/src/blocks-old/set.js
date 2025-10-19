import { Order } from "blockly/javascript";

export const setBlock = {
	init : function() {
		this.jsonInit({
			"type": "set",
			"message0": "set %1 to %2",
			"args0": [
        {
          "type": "input_value",
          "name": "VAR",
          "check": "String"
        },
				{
					"type": "input_value",
					"name": "X"
				}
			],
			"previousStatement": null,
			"nextStatement": null,
			"tooltip": "skibidi"
		});
	}
}

export const setGenerator = function (block, generator) {
	return JSON.stringify({
    type: 'set',
    name: generator.getValuetoCode(block, 'VAR', Order.NONE),
    value: generator.valueToCode(block, 'X', Order.NONE) 
  })+',';
}