export const foreverBlock = {
	init : function() {
		this.jsonInit({
			"type": "forever",
			"message0": "forever",
			"message1": "do %1",
			"args1": [
				{
					"type": "input_statement",
					"name": "CODE"
				}
			],
			"previousStatement": null,
			"nextStatement": null,
			"tooltip": "repeat the block of code inside forever"
		});
	}
}

export const foreverGenerator = function (block, generator) {
	return `console.log('hello');\n`
}