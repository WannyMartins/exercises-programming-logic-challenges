/*

01 - Encontre o maior número de um array

Escreva um algoritmo que recebe um array de números inteiros, procure o maior valor e o retorne.

*/

function getMaxNumber(numbers) {
  const ordenando = numbers.sort((a, b) => b- a);


  // Desenvolva seu código nessa função
  return ordenando[0]// Retorne o resultado aqui
}

module.exports = getMaxNumber;
