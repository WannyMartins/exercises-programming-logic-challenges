/*

10 - Fahrenheit

Escreva um algoritmo que faça conversão de temperatura em graus Fahrenheit para graus Celsius e retorne
  a temperatura em celsius.

*/

const fahrenheitToCelsius = (fahrenheit) => {
  const fCelsius = fahrenheit - 32;
  const result = fCelsius / 1.8;
  const retorno = +(parseFloat(result, 10)).toFixed(2);
  return retorno; // Desenvolva seu código nessa função
}

console.log(fahrenheitToCelsius(100))

module.exports = fahrenheitToCelsius;
