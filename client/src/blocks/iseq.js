export const iseqBlock = {
	init : function() {
		this.jsonInit({
			"type": "iseq",
			"message0": "%1 is equal to %2",
			"args0": [
				{
					"type": "input_value",
					"name": "A",
          "check": "Boolean"
				},
        {
          "type": "input_value",
          "name": "B",
          "check": "Boolean"
        }
			],
      "output": "Boolean",
			"tooltip": "skibidi",
      "inputsInline": true
		});
	}
}

export const iseqGenerator = function (block, generator) {
	return `console.log('hello');\n`
}