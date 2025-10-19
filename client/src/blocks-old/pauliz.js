import { Order } from "blockly/javascript";

export const paulizBlock = {
	init : function() {
		this.jsonInit({
			"type": "pauliz",
			"message0": "roll qubit %1 by %2 degrees",
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

export const paulizGenerator = function (block, generator) {
	return JSON.stringify({
    type: 'plz',
    qbit: generator.valuetoCode(block,'QUBIT',Order.NONE),
    deg: generator.valueToCode(block, 'DEG', Order.NONE) 
  })+',';
}