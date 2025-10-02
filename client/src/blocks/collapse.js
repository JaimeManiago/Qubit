export const collapseBlock = {
	init : function() {
		this.jsonInit({
			"type": "collapse",
			"message0": "collapse qubit %1 of %2",
			"args0": [
				{
					"type": "field_number",
					"name": "IDX",
          "precision": 1,
				},
        {
          "type": "input_value",
          "name": "QREG"
        }
			],
			"previousStatement": null,
			"nextStatement": null,
			"tooltip": "skibidi"
		});
	}
}

export const collapseGenerator = function (block, generator) {
	return [
    JSON.stringify({
      type: 'collapse',
      idx: generator.valueToCode(block, 'IDX', Order.NONE),
      qbit: generator.valueToCode(block, 'QREG', Order.NONE) 
    }),
    Order.NONE
  ];
}