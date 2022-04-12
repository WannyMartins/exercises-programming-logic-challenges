/*

17 - Financiamento de veículo

Escreva um algoritmo para gerenciar as contas de um financiamento de veículo. 

A pessoa que quer fazer o financiamento precisa informar:

* o valor total do carro;
* o valor da entrada a ser dada;
* quantidade de parcelas que ela deseja pagar.

A loja em questão usa uma taxa de juros fixa de 5% sobre o valor do financiamento.

Desenvolva a solução e retorne conforme o exemplo (os valores monetários precisam ter 2 casas decimais após a virgula):

--------------------------------
Valor Financiado: R$35000,00;
Valor do Juros: R$1750,00;
Quantidade de Parcelas: 36;
Valor da Parcela: R$1020,83;
Valor Total do Carro: R$46750,00.
--------------------------------

*/

function carFinancing(carPrice, entranceValue, quota) {
  const valueFinanciado = carPrice - entranceValue;
const juros = valueFinanciado * (5/100);
const parcela = (valueFinanciado + juros) / quota;

const valueTotal = (parcela * quota) + entranceValue;



 return `Valor Financiado: R$${((valueFinanciado).toFixed(2)).replace(/[.]/g, ",")};
Valor do Juros: R$${((juros).toFixed(2)).replace(/[.]/g, ",")};
Quantidade de Parcelas: ${quota};
Valor da Parcela: R$${((parcela).toFixed(2)).replace(/[.]/g, ",")};
Valor Total do Carro: R$${((valueTotal).toFixed(2)).replace(/[.]/g, ",")}.`

  // Desenvolva seu código nessa função
}


module.exports = carFinancing;
