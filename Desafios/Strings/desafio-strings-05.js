/*

05 - Primeira e última letra

Escreva um algoritmo que recebe uma palavra e retorne uma mensagem com a primeira e ultima letra.

Por exemplo:
---------------------------------------------
Entrada:
"Sandy"

Saída:
"A primeira letra é: S, a última letra é: y."
---------------------------------------------

*/

function firstLastLetter(word) {
  // Desenvolva seu código nessa função
  let letra = word.split("").reverse();
  return `A primeira letra é: ${word[0]} e a última letra é: ${letra[0]}.`
}
module.exports = firstLastLetter;
