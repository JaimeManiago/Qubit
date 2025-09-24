export const getBlock = {
	init : function() {
		this.jsonInit({
			"type": "get",
			"message0": "get %1",
			"args0": [
				{
					"type": "field_dropdown",
					"variable": "var",
          "name": "VAR",
          "options": [
            ["hello", "HELLO"],
            ["hi", "HI"]
          ]
				}
			],
      "output": true,
			"tooltip": "rounds down the input"
		});
	}
}

export const getGenerator = function (block, generator) {
	return `console.log('hello');\n`
}