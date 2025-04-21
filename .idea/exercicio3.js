/*
Faça um algoritmo que dado 3 notas tiradas por um aluno em um semestre na faculdade calcule e imprima a sua média e sua classificação conforme a tabela abaixo

Média = (nota1 + nota2 + nota3) / 3

Classificação:
- Média menor que 5, reprovação
- Média entre 5 e 7, recuperação
- Médioa acima de 7, passou de semestre
*/

console.log('Bem vindos ao Calculador de Médias!')

let nomeAluno = 'Astolfonildo';
const quantUnidades = 3;
const notaUnidade1 = 3.4;
const notaUnidade2 = 8.6;
const notaUnidade3 = 7.2;

let media = (notaUnidade1 + notaUnidade2 + notaUnidade3) / quantUnidades;

if (media < 5.0) {
    console.log(nomeAluno + ' está  R E P R O V A D O')
} else if (media < 7.0) {
        console.log(nomeAluno + ' está em  R E C U P E R A Ç Â O')
} else {
    console.log(nomeAluno + ' está  A P R O V A D O')
}