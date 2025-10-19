import { Order } from "blockly/javascript";

export const cregBlock = {
	init : function() {
		this.jsonInit({
			"type": "creg",
			"message0": "classical register with %1 bits",
			"args0": [
				{
					"type": "field_number",
					"name": "N",
          "precision": 1
				}
			],
      "output": true,
			"tooltip": "skibidi"
		});
	}
}

export const cregGenerator = function (block, generator) {
	return [
    `(crg,${
      generator.getFieldValue(block, 'N', Order.NONE)
    })`,
    Order.NONE
  ];
}