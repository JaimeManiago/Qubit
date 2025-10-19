import { Order } from "blockly/javascript";

export const whileBlock = {
	init : function() {
		this.jsonInit({
			"type": "while",
			"message0": "repeat until %1",
			"args0": [
				{
					"type": "input_value",
					"name": "COND",
          "check": "Boolean"
				}
			],
      "message1": "%1",
      "args1": [
				{
					"type": "input_statement",
					"name": "CODE"
				}
			],
			"previousStatement": null,
			"nextStatement": null,
			"tooltip": "skibidi"
		});
	}
}

export const whileGenerator = function (block, generator) {
	let code = generator.statementToCode(block, 'CODE', Order.NONE);
  code = code.length>0 ? code : '{},';
	return `${JSON.stringify({
      type: 'ife',
      cond: generator.valueToCode(block, 'COND', Order.NONE),
      jump: code.split('}').length+1
    })}, ${
      code
    } {"type":"ife","cond":"true","jump":${
      -code.split('}').length
    }},`;
}