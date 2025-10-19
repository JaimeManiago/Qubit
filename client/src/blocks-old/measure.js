import { Order } from "blockly/javascript";

export const measureBlock = {
  init : function() {
    this.jsonInit({
      "type": "mea",
      "message0": "measure infobit %1 of register %2",
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
      "output": true,
      "tooltip": "rounds down the input"
    });
  }
}

export const measureGenerator = function (block, generator) {
  return [
    `(mea,${
      generator.valueToCode(block, 'IDX', Order.NONE)
    },${
      generator.valueToCode(block,'BIT',Order.NONE)
    })`,
    Order.NONE
  ];
}