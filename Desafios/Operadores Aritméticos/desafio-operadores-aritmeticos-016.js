/*

16 - Verdadeiro ou falso?

Escreva um algoritmo que retorne de forma aleatória true ou false.

Obs: O retorne deve ser do tipo boolean.

*/

function randomBoolean(){

  const aleatorio = Math.floor(Math.random() * 2);
if (aleatorio === 1) return true

return false

  // Desenvolva seu código nessa função
}

module.exports = randomBoolean;
