import { Order } from "blockly/javascript";

export const qregBlock = {
	init : function() {
		this.jsonInit({
			"type": "qreg",
			"message0": "quantum register with %1 qubits",
			"args0": [
				{
					"type": "field_number",
					"name": "N"
				}
			],
      "output": true,
			"tooltip": "skibidi"
		});
	}
}

export const qregGenerator = function (block, generator) {
	return [`(
      qrg,
      ${generator.getFieldValue(block, 'N', Order.NONE)}
    )`,
    Order.NONE
  ];
}