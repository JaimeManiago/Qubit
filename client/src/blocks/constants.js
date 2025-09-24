export const constantsBlock = {
	init : function() {
		this.jsonInit({
			"type": "constants",
			"message0": "%1",
			"args0": [
        {
          "type": "field_dropdown",
          "name": "CONST",
          "variable": "constant",
          "options": [
            ["pi", "PI"],
            ["Euler's number", "E"],
            ["golden ratio", "GR"],
            ["imaginary number", "i"]
          ]
        }
      ],
      "output": "Number",
			"tooltip": "repeat the block of code inside constants"
		});
	}
}

export const constantsGenerator = function (block, generator) {
	return `console.log('hello');\n`
}