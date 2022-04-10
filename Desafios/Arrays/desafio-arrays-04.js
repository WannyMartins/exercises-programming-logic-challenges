/*

04 - Verifique se todos os dados de uma lista são do mesmo tipo

Escreva uma algoritmo que recebe um array de dados quaisquer e verifique se todos são do mesmo tipo.

Se todos forem retorne:
------
true
------

Caso contrário:
-------
false
-------

Obs: Os retornos tem que ser dados do tipo boolean.

*/

function dataType(types){
  const typeof1 = typeof types[0]
for( let i of types){
  if(typeof1 !== typeof i) {
    return false
  }
}
    return true
  }

  // Desenvolva seu código aqui.
  // return // Retorne o resultado aqui

module.exports = dataType;
