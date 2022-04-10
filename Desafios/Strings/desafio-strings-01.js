/*

01 - Inverte nomes

Escreva um algoritmo que recebe uma string com o formato "Nome Sobrenome" e retorne
uma outra string com os nomes invertidos.

Por exemplo:
---------------------
Entrada:
"Xablau Xablauzinho"

Saída:
"Xablauzinho Xablau"
---------------------

*/

function reverseNames(fullName) {
  const invertido =[];
  const fullNameSplit = fullName.split(' ').reverse()
  // for (let i = fullNameSplit.length-1; i >= 0; i -= 1) {
  //   invertido.push(fullNameSplit[i])
  // }
  return fullNameSplit.join(' ')
  // Desenvolva seu código nessa função
}
module.exports = reverseNames;
