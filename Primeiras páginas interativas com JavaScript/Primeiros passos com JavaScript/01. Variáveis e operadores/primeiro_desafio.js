/*
Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
 1 - Preço do combustível;
 2 - Gasto médio de combustível do carro em KM por litro;
 3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem. 
*/

const precoCombustivel = 5.79;
const kmPorLitro = 12;
const distancia = 1580;

const consumoLitros = distancia / kmPorLitro
const total = precoCombustivel * consumoLitros

console.log("Para uma distância de " + distancia + " km, em um carro que corre em média " 
+ kmPorLitro + " km por litro, considerando o preço do combustível de R$ " 
+ precoCombustivel.toFixed(2) + ", o custo total é de R$ " + total.toFixed(2) + ".")