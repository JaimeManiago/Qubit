import { Order } from "blockly/javascript";

export const forBlock = {
	init : function() {
		this.jsonInit({
			"type": "for",
			"message0": "repeat %1 times",
			"args0": [
				{
					"type": "input_value",
					"name": "ITER",
          "check": "Number"
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

export const forGenerator = function (block, generator) {
  let code = generator.statementToCode(block, 'CODE', Order.NONE);
  code = code.length>0 ? code : '{},';
	return `${JSON.stringify({
      type: 'ife',
      cond: generator.valueToCode(block, 'ITER', Order.NONE),
      jump: code.split('}').length+1
    })}, ${
      code
    } {"type":"ife","cond":"true","jump":${
      -code.split('}').length
    }},`;
}