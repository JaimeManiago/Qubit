import * as Blockly from 'blockly'
import { javascriptGenerator } from 'blockly/javascript'
/*import { foreverBlock, foreverGenerator} from './forever.js'
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
import { getBlock, getGenerator} from './get.js'
import { setBlock, setGenerator} from './set.js'
import { startBlock, startGenerator} from './start.js'
import { whileBlock, whileGenerator} from './while.js'
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
import { measureBlock, measureGenerator} from './measure.js'
import { prepBlock, prepGenerator} from './prep.js'
import { collapseBlock, collapseGenerator} from './collapse.js'
import { qregBlock, qregGenerator} from './qreg.js'
import { paulixBlock, paulixGenerator} from './paulix.js'
import { pauliyBlock, pauliyGenerator} from './pauliy.js'
import { paulizBlock, paulizGenerator} from './pauliz.js'
import { hadamardBlock, hadamardGenerator} from './hadamard.js'
*/

import { entangleBlock, entangleGenerator} from './entangle.js'
import { hadamardBlock, hadamardGenerator} from './hadamard.js'
import { pauli_xBlock, pauli_xGenerator} from './pauli_x.js'
import { pauli_yBlock, pauli_yGenerator} from './pauli_y.js'
import { pauli_zBlock, pauli_zGenerator} from './pauli_z.js'
import { resetBlock, resetGenerator} from './reset.js'
import { rotate_xBlock, rotate_xGenerator} from './rotate_x.js'
import { rotate_yBlock, rotate_yGenerator} from './rotate_y.js'
import { rotate_zBlock, rotate_zGenerator} from './rotate_z.js'
import { set_qubitBlock, set_qubitGenerator} from './set_qubit.js'

/*
import { aaaBlock, aaaGenerator} from './aaa.js'

*/

export function registerBlocks() {
  
  Blockly.Blocks['entangle'] = entangleBlock;
  javascriptGenerator.forBlock['entangle'] = entangleGenerator;
  
  Blockly.Blocks['hadamard'] = hadamardBlock;
  javascriptGenerator.forBlock['hadamard'] = hadamardGenerator;
  
  Blockly.Blocks['pauli_x'] = pauli_xBlock;
  javascriptGenerator.forBlock['pauli_x'] = pauli_xGenerator;
  
  Blockly.Blocks['pauli_y'] = pauli_yBlock;
  javascriptGenerator.forBlock['pauli_y'] = pauli_yGenerator;
  
  Blockly.Blocks['pauli_z'] = pauli_zBlock;
  javascriptGenerator.forBlock['pauli_z'] = pauli_zGenerator;
  
  Blockly.Blocks['reset'] = resetBlock;
  javascriptGenerator.forBlock['reset'] = resetGenerator;
  
  Blockly.Blocks['rotate_x'] = rotate_xBlock;
  javascriptGenerator.forBlock['rotate_x'] = rotate_xGenerator;
  
  Blockly.Blocks['rotate_y'] = rotate_yBlock;
  javascriptGenerator.forBlock['rotate_y'] = rotate_yGenerator;
  
  Blockly.Blocks['rotate_z'] = rotate_zBlock;
  javascriptGenerator.forBlock['rotate_z'] = rotate_zGenerator;
  
  Blockly.Blocks['set_qubit'] = set_qubitBlock;
  javascriptGenerator.forBlock['set_qubit'] = set_qubitGenerator;
  
  /*
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
  
  Blockly.Blocks['get'] = getBlock;
  javascriptGenerator.forBlock['get'] = getGenerator;
  
  Blockly.Blocks['set'] = setBlock;
  javascriptGenerator.forBlock['set'] = setGenerator;
  
  Blockly.Blocks['start'] = startBlock;
  javascriptGenerator.forBlock['start'] = startGenerator;
  
  Blockly.Blocks['while'] = whileBlock;
  javascriptGenerator.forBlock['while'] = whileGenerator;
  
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
  
  Blockly.Blocks['measure'] = measureBlock;
  javascriptGenerator.forBlock['measure'] = measureGenerator;
  
  Blockly.Blocks['prep'] = prepBlock;
  javascriptGenerator.forBlock['prep'] = prepGenerator;
  
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
  
  Blockly.Blocks['hadamard'] = hadamardBlock;
  javascriptGenerator.forBlock['hadamard'] = hadamardGenerator;
  */
  
  /*
  
  Blockly.Blocks['aaa'] = aaaBlock;
  javascriptGenerator.forBlock['aaa'] = aaaGenerator;
  
  */
}