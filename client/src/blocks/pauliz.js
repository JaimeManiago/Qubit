export const paulizBlock = {
	init : function() {
		this.jsonInit({
			"type": "pauliz",
			"message0": "roll qubit %1",
			"args0": [
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

export const paulizGenerator = function (block, generator) {
	return `console.log('hello');\n`
}