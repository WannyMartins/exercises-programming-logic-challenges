/*

09 - Brincando de espionagem

Joana e Jonas estão brincando de espionagem e querem trocar mensagens codificadas.

Escreva um algoritmo que recebe uma string troque as vogais no seguinte padrão e a retorne:
a - 5
e - b
i - 9
o - p
u - 1

*/

function encodeMessage(string) {
  let newString = string;
  newString = newString.replace(/[a]/g, 5);
  newString = newString.replace(/[e]/g, 'b');
  newString = newString.replace(/[i]/g, 9);
  newString = newString.replace(/[o]/g, "p");
  newString = newString.replace(/[u]/g, 1);
  
  return newString;
  
  // Desenvolva seu código nessa função
}


module.exports = encodeMessage;
