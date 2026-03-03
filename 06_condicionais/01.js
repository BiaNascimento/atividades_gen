import leia from "readline-sync";

let numA;
let numB;
let numC;
let soma;

numA = leia.questionInt("Digite o numero A: ");
numB = leia.questionInt("Digite o numero B: ");
numC = leia.questionInt("Digite o numero C: ");
soma = numA + numB;

if (numA + numB < numC) {
  console.log(`A Soma de A + B é menor do que C`);
} else if (numA + numB > numC) {
  console.log(`A Soma de A + B é maior do que C`);
} else {
  console.log(`A Soma de A + B é igual a C`);
}
