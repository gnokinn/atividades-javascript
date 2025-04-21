/*
Faça um programa para calcular o valor de uma viajem

você terá 5 variáveis, sendo elas:
1 - precoEtanol;
2 - precoGasolina;
3 - tipoCombustivelNoCarro
4 - gastoMedioCombustivelPorKm
5 - distanciaViajem

Imprima no console o valor que será gasto para realizar esta viajem
*/

console.log('Bem Vindo ao Calculador Inteligente de Combustível!')

let precoEtanol = 4.50;
let precoGasolina = 6.20;
let tipoCombustivelNoCarro = 'Etanol';
const gastoMedioCombustivelPorKm = 12;
const distanciaViajem = 100;

if (tipoCombustivelNoCarro === 'Etanol') {
    let valorGastoEtanol = precoEtanol * distanciaViajem / gastoMedioCombustivelPorKm;

    console.log('O valor a ser gasto utilizando etanol é: R$ ' + valorGastoEtanol.toFixed(2));
}else {
    let valorGastoGasolina = precoGasolina * distanciaViajem / gastoMedioCombustivelPorKm;

    console.log('O valor a ser gasto utilizando gasolina é: R$ ' + valorGastoGasolina.toFixed(2));
}