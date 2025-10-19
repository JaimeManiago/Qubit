import { Order } from "blockly/javascript";

export const constantsBlock = {
	init : function() {
		this.jsonInit({
			"type": "constants",
			"message0": "%1",
			"args0": [
        {
          "type": "field_dropdown",
          "name": "CONST",
          "options": [
            ["π", "PI"],
            ["e", "EULNUM"],
            ["φ", "GOLDRATIO"],
            ["i", "INUM"]
          ]
        }
      ],
      "output": "Number",
			"tooltip": "repeat the block of code inside constants"
		});
	}
}

export const constantsGenerator = function (block, generator) {
  switch (block.getFieldValue('CONST')) {
    case 'PI':
      return [`${Math.PI}}`, Order.NONE];
    case 'EULNUM':
      return [`${Math.E}}`, Order.NONE];
    case 'GOLDRATIO':
      return [`${(1+Math.sqrt(5))/2}}`, Order.NONE];
    case 'INUM':
      return ['i', Order.NONE];
  }
}