import leia from "readline-sync";

let num;
let soma = 0;
let media = 0;
const multiplo = [];

do {
  num = leia.questionInt("Digite um numero: ");

  if (num % 3 === 0 && num != 0) {
    multiplo.push(num);
  }
} while (num != 0);

for (let i = 0; i < multiplo.length; i++) {
  soma += multiplo[i];
}

media = soma / multiplo.length;

console.log(`A media de todos os numeros multiplos de 3 e: ${media}`);
