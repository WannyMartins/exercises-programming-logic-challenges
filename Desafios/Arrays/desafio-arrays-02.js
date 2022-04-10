/*

02 - Encontre o menor número de um array

Escreva um algoritmo que recebe um array de números inteiros, procure o menor valor e o retorne.

*/

function getMinNumber(numbers) {
  const ordenado = numbers.sort((a, b) => a - b)
  // Desenvolva seu código nessa função
  return ordenado[0]// Retorne o resultado aqui
}

module.exports = getMinNumber;
