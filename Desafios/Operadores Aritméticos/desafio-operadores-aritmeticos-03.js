/*

03 - Antecessor e Sucessor

Escreva um algoritmo que recebe um número inteiro e retorne o seu antecessor e sucessor no seguinte formato:

--------------------------------------------------
"O antecessor de "number" é x e seu sucessor é y."
-------------------------------------------------- 

*/

function showNeighbors(number){

  const sucessor = number + 1;
  const antecessor = number - 1;

 return `O antecessor de ${number} é ${antecessor} e seu sucessor é ${sucessor}`;
  // Desenvolva seu código nessa função
}

module.exports = showNeighbors;
