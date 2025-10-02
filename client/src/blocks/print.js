import { Order } from "blockly/javascript";

export const printBlock = {
	init : function() {
		this.jsonInit({
			"type": "print",
			"message0": "print %1",
			"args0": [
        {
          "type": "input_value",
          "name": "OUTPUT"
        }
			],
			"previousStatement": null,
			"nextStatement": null,
			"tooltip": "skibidi"
		});
	}
}

export const printGenerator = function (block, generator) {
	return `;print${
    generator.valueToCode(block, 'OUTPUT', Order.ATOMIC)
  }`;
}