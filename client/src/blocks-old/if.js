import { Order } from "blockly/javascript";

export const ifBlock = {
	init : function() {
		this.jsonInit({
			"type": "if",
			"message0": "if %1",
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
					"name": "IFCODE"
				}
			],
			"message2": "else",
			"message3": "%1",
			"args3": [
				{
					"type": "input_statement",
					"name": "ELSECODE"
				}
			],
			"previousStatement": null,
			"nextStatement": null,
      "inputsInline": false,
			"tooltip": "skibidi"
		});
	}
}

export const ifGenerator = function (block, generator) {
  let ifcode = generator.statementToCode(block, 'IFCODE', Order.NONE);
  let elsecode = generator.statementToCode(block,'ELSECODE', Order.NONE);
	
  ifcode = ifcode.length>0 ? ifcode : '{},';
  elsecode = elsecode.length>0 ? elsecode : '{},';
  return `${JSON.stringify({
      type: 'ife',
      cond: generator.valueToCode(block, 'COND', Order.NONE),
      jump: ifcode.split('}').length+1
    })}, ${
      ifcode
    } {"type":"ife","cond":"true","jump":${
      elsecode.split('}').length
    }}, ${
      elsecode
    }`;
}