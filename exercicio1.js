/*
Faça um programa para calcular o valor de uma viajem.

Você terá 3 variáveis, sendo elas:

1. Preço do combustível;
2. Gasto médio de combustível do carro por KM;
3. Distância em KM da viajem;

Imprima no console o valor que será gasto de combustível para realizar esta viajem.
*/

console.log("Bem vindo ao Calculador de Rotas!")

let precoCombustivel = 6.2;
const kmPorCombustivel = 12;
const distanciaViajem = 64;

let valorGasto = (precoCombustivel*distanciaViajem)/kmPorCombustivel;

console.log("O valor que você irá gastar pela viajem é: R$ " + valorGasto.toFixed(2))
