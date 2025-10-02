import * as Blockly from 'blockly'
import { javascriptGenerator } from 'blockly/javascript'
import { foreverBlock, foreverGenerator} from './forever.js'
import { absBlock, absGenerator} from './abs.js'
import { addBlock, addGenerator} from './add.js'
import { minusBlock, minusGenerator} from './minus.js'
import { multBlock, multGenerator} from './mult.js'
import { divideBlock, divideGenerator} from './divide.js'
import { andBlock, andGenerator} from './and.js'
import { orBlock, orGenerator} from './or.js'
import { ceilBlock, ceilGenerator} from './ceil.js'
import { floorBlock, floorGenerator} from './floor.js'
import { constantsBlock, constantsGenerator} from './constants.js'
import { cosBlock, cosGenerator} from './cos.js'
import { coshBlock, coshGenerator} from './cosh.js'
import { sinBlock, sinGenerator} from './sin.js'
import { sinhBlock, sinhGenerator} from './sinh.js'
import { ifBlock, ifGenerator} from './if.js'
import { cregBlock, cregGenerator} from './creg.js'
import { declareBlock, declareGenerator} from './declare.js'
import { defineBlock, defineGenerator} from './define.js'
import { forBlock, forGenerator} from './for.js'
import { collapseBlock, collapseGenerator} from './collapse.js'
import { qregBlock, qregGenerator} from './qreg.js'
import { paulixBlock, paulixGenerator} from './paulix.js'
import { pauliyBlock, pauliyGenerator} from './pauliy.js'
import { paulizBlock, paulizGenerator} from './pauliz.js'
import { getBlock, getGenerator} from './get.js'
import { setBlock, setGenerator} from './set.js'
import { startBlock, startGenerator} from './start.js'
import { whileBlock, whileGenerator} from './while.js'
import { hadamardBlock, hadamardGenerator} from './hadamard.js'
import { notBlock, notGenerator} from './not.js'
import { randomBlock, randomGenerator} from './random.js'
import { roundBlock, roundGenerator} from './round.js'
import { iseqBlock, iseqGenerator} from './iseq.js'
import { isgtBlock, isgtGenerator} from './isgt.js'
import { isltBlock, isltGenerator} from './islt.js'
import { printBlock, printGenerator} from './print.js'
import { radBlock, radGenerator} from './rad.js'
import { expBlock, expGenerator} from './exp.js'
import { logBlock, logGenerator} from './log.js'

/*
import { aaaBlock, aaaGenerator} from './aaa.js'

*/

export function registerBlocks() {
  Blockly.Blocks['forever'] = foreverBlock;
  javascriptGenerator.forBlock['forever'] = foreverGenerator;

  Blockly.Blocks['abs'] = absBlock;
  javascriptGenerator.forBlock['abs'] = absGenerator;

  Blockly.Blocks['add'] = addBlock;
  javascriptGenerator.forBlock['add'] = addGenerator;

  Blockly.Blocks['minus'] = minusBlock;
  javascriptGenerator.forBlock['minus'] = minusGenerator;

  Blockly.Blocks['mult'] = multBlock;
  javascriptGenerator.forBlock['mult'] = multGenerator;

  Blockly.Blocks['divide'] = divideBlock;
  javascriptGenerator.forBlock['divide'] = divideGenerator;

  Blockly.Blocks['and'] = andBlock;
  javascriptGenerator.forBlock['and'] = andGenerator;

  Blockly.Blocks['or'] = orBlock;
  javascriptGenerator.forBlock['or'] = orGenerator;
  
  Blockly.Blocks['ceil'] = ceilBlock;
  javascriptGenerator.forBlock['ceil'] = ceilGenerator;
  
  Blockly.Blocks['floor'] = floorBlock;
  javascriptGenerator.forBlock['floor'] = floorGenerator;
  
  Blockly.Blocks['constants'] = constantsBlock;
  javascriptGenerator.forBlock['constants'] = constantsGenerator;

  Blockly.Blocks['cos'] = cosBlock;
  javascriptGenerator.forBlock['cos'] = cosGenerator;

  Blockly.Blocks['cosh'] = coshBlock;
  javascriptGenerator.forBlock['cosh'] = coshGenerator;

  Blockly.Blocks['sin'] = sinBlock;
  javascriptGenerator.forBlock['sin'] = sinGenerator;

  Blockly.Blocks['sinh'] = sinhBlock;
  javascriptGenerator.forBlock['sinh'] = sinhGenerator;

  Blockly.Blocks['if'] = ifBlock;
  javascriptGenerator.forBlock['if'] = ifGenerator;
  
  Blockly.Blocks['creg'] = cregBlock;
  javascriptGenerator.forBlock['creg'] = cregGenerator;

  Blockly.Blocks['declare'] = declareBlock;
  javascriptGenerator.forBlock['declare'] = declareGenerator;
  
  Blockly.Blocks['define'] = defineBlock;
  javascriptGenerator.forBlock['define'] = defineGenerator;
  
  Blockly.Blocks['for'] = forBlock;
  javascriptGenerator.forBlock['for'] = forGenerator;
  
  Blockly.Blocks['collapse'] = collapseBlock;
  javascriptGenerator.forBlock['collapse'] = collapseGenerator;
  
  Blockly.Blocks['qreg'] = qregBlock;
  javascriptGenerator.forBlock['qreg'] = qregGenerator;
  
  Blockly.Blocks['paulix'] = paulixBlock;
  javascriptGenerator.forBlock['paulix'] = paulixGenerator;
  
  Blockly.Blocks['pauliy'] = pauliyBlock;
  javascriptGenerator.forBlock['pauliy'] = pauliyGenerator;
  
  Blockly.Blocks['pauliz'] = paulizBlock;
  javascriptGenerator.forBlock['pauliz'] = paulizGenerator;
  
  Blockly.Blocks['get'] = getBlock;
  javascriptGenerator.forBlock['get'] = getGenerator;
  
  Blockly.Blocks['set'] = setBlock;
  javascriptGenerator.forBlock['set'] = setGenerator;
  
  Blockly.Blocks['start'] = startBlock;
  javascriptGenerator.forBlock['start'] = startGenerator;
  
  Blockly.Blocks['while'] = whileBlock;
  javascriptGenerator.forBlock['while'] = whileGenerator;
  
  Blockly.Blocks['hadamard'] = hadamardBlock;
  javascriptGenerator.forBlock['hadamard'] = hadamardGenerator;
  
  Blockly.Blocks['not'] = notBlock;
  javascriptGenerator.forBlock['not'] = notGenerator;
  
  Blockly.Blocks['random'] = randomBlock;
  javascriptGenerator.forBlock['random'] = randomGenerator;
  
  Blockly.Blocks['round'] = roundBlock;
  javascriptGenerator.forBlock['round'] = roundGenerator;
  
  Blockly.Blocks['iseq'] = iseqBlock;
  javascriptGenerator.forBlock['iseq'] = iseqGenerator;
  
  Blockly.Blocks['islt'] = isltBlock;
  javascriptGenerator.forBlock['islt'] = isltGenerator;
  
  Blockly.Blocks['isgt'] = isgtBlock;
  javascriptGenerator.forBlock['isgt'] = isgtGenerator;
  
  Blockly.Blocks['print'] = printBlock;
  javascriptGenerator.forBlock['print'] = printGenerator;
  
  Blockly.Blocks['rad'] = radBlock;
  javascriptGenerator.forBlock['rad'] = radGenerator;
  
  Blockly.Blocks['exp'] = expBlock;
  javascriptGenerator.forBlock['exp'] = expGenerator;
  
  Blockly.Blocks['log'] = logBlock;
  javascriptGenerator.forBlock['log'] = logGenerator;
  
  /*
  
  Blockly.Blocks['aaa'] = aaaBlock;
  javascriptGenerator.forBlock['aaa'] = aaaGenerator;
  
  */
}