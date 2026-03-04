import leia from "readline-sync";

let num;
let soma = 0;
const positivo = [];
do {
  num = leia.questionInt("Digite um numero: ");

  if (num > 0) {
    positivo.push(num);
  }
} while (num != 0);

for (let i = 0; i < positivo.length; i++) {
  soma += positivo[i];
}

console.log(`A soma dos numeros positivos e: ${soma}`);
