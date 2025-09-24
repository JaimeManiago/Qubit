export const defineBlock = {
	init : function() {
		this.jsonInit({
			"type": "define",
			"message0": "define a new block %1",
			"args0": [
				{
					"type": "input_value",
					"name": "BLOCK"
				}
			],
			"nextStatement": null,
			"tooltip": "skibidi"
		});
	}
}

export const defineGenerator = function (block, generator) {
	return `console.log('hello');\n`
}