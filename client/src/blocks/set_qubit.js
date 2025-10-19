export const set_qubitBlock = {
	init : function() {
		this.jsonInit({
			"type": "set_qubit",
			"message0": "set %1 qubits",
			"args0": [
				{
					"type": "field_number",
					"name": "X"
				}
			],
			"tooltip": "initiates qubits"
		});
	}
}

export const set_qubitGenerator = function (block, generator) {
  return `e ${generator.getFieldValue('X')}`;
}