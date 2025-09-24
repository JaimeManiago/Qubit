export const qregBlock = {
	init : function() {
		this.jsonInit({
			"type": "qreg",
			"message0": "create a quantum registry with %1 qubits",
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

export const qregGenerator = function (block, generator) {
	return `console.log('hello');\n`
}