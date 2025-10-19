import { Order } from "blockly/javascript";

export const pauliyBlock = {
	init : function() {
		this.jsonInit({
			"type": "pauliy",
			"message0": "turn qubit %1 by %2 degrees",
			"args0": [
        {
          "type": "input_value",
          "name": "QUBIT"
        },
        {
          "type": "input_value",
          "name": "DEG",
          "check": "Number"
        }
			],
			"previousStatement": null,
			"nextStatement": null,
			"tooltip": "skibidi"
		});
	}
}

export const pauliyGenerator = function (block, generator) {
	return JSON.stringify({
    type: 'ply',
    qbit: generator.valuetoCode(block,'QUBIT',Order.NONE),
    deg: generator.valueToCode(block, 'DEG', Order.NONE) 
  })+',';
}