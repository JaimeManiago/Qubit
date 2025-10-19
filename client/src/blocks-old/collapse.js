import { Order } from "blockly/javascript";

export const collapseBlock = {
	init : function() {
		this.jsonInit({
			"type": "collapse",
			"message0": "collapse %1",
			"args0": [
				{
          "type": "input_value",
          "name": "QUBIT"
        }
			],
			"previousStatement": null,
			"nextStatement": null,
			"tooltip": "skibidi"
		});
	}
}

export const collapseGenerator = function (block, generator) {
	return JSON.stringify({
    type: 'col',
    qbit: generator.valuetoCode(block,'QUBIT',Order.NONE)
  }) + ',';
}