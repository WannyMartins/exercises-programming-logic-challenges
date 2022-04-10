/*

08 - Conta do restaurante

Escreva um algoritmo que recebe o valor de um prato, calcule e retorne o valor final dele acrescendo 10% de taxa por ser uma área turística e mais 5% de gorjeta para o garçon.

Obs: Retornar um valor do tipo number com duas casa decimais.

*/

function restaurantExpenses(account){
  const dez = account * (10 / 100);
  const cinco = (dez + account) * (5 / 100);
  const total = account + dez + cinco;
  // parseFloat(total).toFixed(2);
  return total;
  // Desenvolva seu código nessa função
}

module.exports = restaurantExpenses;
