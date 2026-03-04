import leia from "readline-sync";

let num;
let soma = 0;
let media = 0;
const vetor = [];
const par = [];
const impar = [];

for (let i = 0; i < 10; i++) {
  num = leia.questionInt("Digite um numero: ");
  vetor.push(num);

  if (vetor.indexOf(num) % 2 != 0) {
    impar.push(num);
  }

  if (num % 2 === 0) {
    par.push(num);
  }

  soma += vetor[i];
}

media = soma / vetor.length;

console.log(
  `Elementos nos indices impares ${impar} \nElementos pares: ${par} \nSoma: ${soma} \nMedia: ${media}`,
);
