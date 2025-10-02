export const declareBlock = {
	init : function() {
		this.jsonInit({
			"type": "declare",
			"message0": "declare new variable named %1",
			"args0": [
				{
					"type": "input_value",
					"name": "NAME",
          "check": "String"
				}
			],
			"previousStatement": null,
			"nextStatement": null,
      "inputsInline": true,
			"tooltip": "skibidi"
		});
	}
}

export const declareGenerator = function (block, generator) {
	return [
    `declare,`+
    `${generator.valueToCode(block, 'NAME', Order.NONE)}`,
    Order.NONE
  ];
}
