/*

13 - Cor aleatória

Elabore uma função que retorne uma cor RGB aleatória no formato:
--------------
"rgb(r, g, b)"
--------------

 */

function generateColor(){
  const cor = Math.floor(Math.random()*255);
  return `rgb(${cor}, ${cor}, ${cor})`
  // Desenvolva seu código nessa função
}

module.exports = generateColor;
