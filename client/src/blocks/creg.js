export const cregBlock = {
	init : function() {
		this.jsonInit({
			"type": "creg",
			"message0": "create a classical registry with %1 bits",
			"args0": [
				{
					"type": "field_number",
					"name": "N"
				}
			],
      "output": true,
			"tooltip": "skibidi"
		});
	}
}

export const cregGenerator = function (block, generator) {
	return `console.log('hello');\n`
}