/*

08 - Descubra quantas letras tem

Escreva um algoritmo que recebe 2 parâmetros: uma string (frase ou palavra) e uma letra.

A função deve retornar quantas letras passadas como 2º parâmetro existem na string.

Obs: Trate as vogais com acento como não tendo, por exemplo:
a = á, ã, à.

*/

function countLetters(string, letter) {
  let count = 0;
  let newString = string;
  newString = newString.replace(/[àáäâã]/g, "a");
  newString = newString.replace(/[èéëê]/g, "e");
  newString = newString.replace(/[ìíïî]/g, "i");
  newString = newString.replace(/[òóöô]/g, "o");
  newString = newString.replace(/[ùúüû]/g, "u");
  newString = newString.toLowerCase();
  const stringMod = newString.split("")
  stringMod.filter((letra) => {
   if(letra === letter) {count += 1} 
  });
 return count;
  // Desenvolva seu código nessa função
}

console.log(countLetters('somente uma', 'e'))

module.exports = countLetters;
