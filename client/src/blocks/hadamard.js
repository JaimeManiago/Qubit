export const hadamardBlock = {
	init : function() {
		this.jsonInit({
			"type": "hadamard",
			"message0": "superpose qubit %1",
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

export const hadamardGenerator = function (block, generator) {
	return `console.log('hello');\n`
}