const leia = require('readline-sync');

let num1;
let num2;
let num3;
let num4;
let diferenca;

num1 = leia.questionFloat("Digite o primeiro numero: ");
num2 = leia.questionFloat("Digite o segundo numero: ");
num3 = leia.questionFloat("Digite o terceiro numero: ");
num4 = leia.questionFloat("Digite o quarto numero: ");

diferenca = (num1 * num2) - (num3 * num4);

console.log(`A diferença do produto de n1 e n2 pelo produto de n3 com n4 é ${diferenca}`)