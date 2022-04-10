/*

07 - Contem "a" ?

Escreva um algoritmo que recebe uma palavra e checa se ela possui a letra "a" considerando as seguintes premissas para cada tipo de retorno.

Se apenas começa com letra "a", retorne:
------------------------------------------------------------
"A palavra x possui a letra 'a' apenas como primeira letra."
------------------------------------------------------------

Se apenas termina com a letra "a", retorne:
----------------------------------------------------------
"A palavra x possui a letra "a" apenas como última letra."
----------------------------------------------------------

Se apenas termina e começa com a letra "a", retorne:
----------------------------------------------------------------------
"A palavra x possui a letra 'a' apenas no começo e no fim da palavra."
----------------------------------------------------------------------

Se apenas possui o "a" sem a mesma ser a primeira ou a última letra da palavra, , retorne:
----------------------------------------------------------------------------
"A palavra x possui a letra 'a', porém não é a primeira nem a última letra."
----------------------------------------------------------------------------

Senão, retorne:
-----------------------------
"A palavra x não contém "a"."
-----------------------------

*/


function includeA(word) {
  let newWord = word.toLowerCase();
  let start = newWord.startsWith('a');
  let end = newWord.endsWith('a');
  let contain = newWord.substr(1, newWord.length - 2).includes('a')

    if (start && end && !contain){
        return `A palavra ${word} possui a letra 'a' apenas no começo e no fim da palavra.`
      }
      if (start && !end && !contain) {
        return `A palavra ${word} possui a letra 'a' apenas como primeira letra.`;
      }
      if (!start && end && !contain) {
        return `A palavra ${word} possui a letra 'a' apenas como última letra.`;
      }
      if (!start && !end && contain) {
        return `A palavra ${word} possui a letra 'a', porém não é a primeira nem a última letra.`;
      }
      return `A palavra ${word} não contém a letra 'a'.`
    }
  // const aInicial = word[0] === 'a' || word[0] === 'A';
  // const aFinal = (word.split('').reverse()[0]) === /a/i;
  // const aFeAI = aInicial && aFinal;
  // const acentro = word.split("").includes('a'); 
  
  // if(aFeAI){
    
  //   return `A palavra ${word} possui a letra 'a' apenas no começo e no fim da palavra.`;
  // } 
  // if (aInicial){

  //   return `A palavra ${word} possui a letra 'a' apenas como primeira letra.`;
  // }
  // if (aFinal){

  //     return `A palavra ${word} possui a letra 'a' apenas como última letra.`;
  //   } 
  //   if (acentro){
      
  //     return `A palavra ${word} possui a letra 'a', porém não é a primeira nem a última letra.`;
  //   }

  //     return `A palavra ${word} não contém a letra 'a'.`;
  // Desenvolva seu código nessa função



  module.exports = includeA;
