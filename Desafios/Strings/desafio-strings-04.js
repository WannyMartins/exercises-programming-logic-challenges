/*

04 - Quatro operações matemáticas

Escreva um algoritmo que recebe dois números inteiros, executa as quatro operação matemáticas básicas nestes números (soma, subtração, multiplicação e divisão) e retorne uma string no seguinte formato.

Por exemplo:
------------------------------------------------
Entradas:
1, 2

Saída:
"1 + 2 = 3. 1 - 2 = -1. 1 x 2 = 2. 1 / 2 = 0.5."
------------------------------------------------

*/

function mathOperations(number1, number2) {
  const soma = number1 + number2;
  const sub = number1 - number2;
  const mult = number1 * number2;
  const div = number1 / number2;
  return `${number1} + ${number2} = ${soma}. ${number1} - ${number2} = ${sub}. ${number1} x ${number2} = ${mult}. ${number1} / ${number2} = ${div}.`
  // Desenvolva seu código nessa função
}

module.exports = mathOperations;
