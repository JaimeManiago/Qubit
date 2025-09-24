export const setBlock = {
	init : function() {
		this.jsonInit({
			"type": "set",
			"message0": "set %1 to %2",
			"args0": [
        {
          "type": "field_dropdown",
          "name": "VAR",
          "variable": "var",
          "options": [
            ["hello", "HELLO"],
            ["hi", "HI"]
          ]
        },
				{
					"type": "input_value",
					"name": "X"
				}
			],
			"previousStatement": null,
			"nextStatement": null,
			"tooltip": "skibidi"
		});
	}
}

export const setGenerator = function (block, generator) {
	return `console.log('hello');\n`
}