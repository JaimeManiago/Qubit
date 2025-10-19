import { Order } from "blockly/javascript";

export const prepBlock = {
  init : function() {
    this.jsonInit({
      "type": "prep",
      "message0": "set infobit %1 of register %2",
      "args0": [
        {
          "type": "input_value",
          "name": "IDX",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "BIT",
          "check": "String"
        }
      ],
      "output": "Number",
      "tooltip": "rounds down the input"
    });
  }
}

export const prepGenerator = function (block, generator) {
  return [
    `(pre,${
      generator.valueToCode(block, 'IDX', Order.NONE)
    },${
      generator.valueToCode(block,'BIT',Order.NONE)
    })`,
    Order.NONE
  ];
}