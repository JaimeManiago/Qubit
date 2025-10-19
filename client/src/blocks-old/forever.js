import { Order } from "blockly/javascript";

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
			"tooltip": "repeat the block of code inside forever"
		});
	}
}

export const foreverGenerator = function (block, generator) {
  const code = generator.statementToCode(block, 'CODE', Order.NONE);
	return `${
      code.length>0 ? code : '{},'
    } {"type":"ife","cond":"true","jump":${
      -code.split('}').length+1
    }},`;
}