import { javascriptGenerator } from "blockly/javascript";

export const addBlock = {
	init : function() {
		this.jsonInit({
			"type": "add",
			"message0": "%1 + %2",
			"args0": [
				{
					"type": "input_value",
					"name": "A",
          "check": "Number"
				},
        {
          "type": "input_value",
          "name": "B",
          "check": "Number"
        }
			],
      "output": "Number",
			"tooltip": "skibidi",
      "inputsInline": true
		});
	}
}

export const addGenerator = function (block, generator) {
  const first = javascriptGenerator.valueToCode(block, 'A', javascriptGenerator.ORDER_NONE) || '0';
  const second = javascriptGenerator.valueToCode(block, 'B', javascriptGenerator.ORDER_NONE) || '0';
	return `alert('${first} and ${second}')\n`
}