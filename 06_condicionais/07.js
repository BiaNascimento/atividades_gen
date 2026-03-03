import leia from "readline-sync";

let num1;
let num2;
let operador;

num1 = leia.questionFloat("Digite o primeiro numero: ");
num2 = leia.questionFloat("Digite o segundo numero: ");
operador = leia.questionInt("Digite a operacao: ");

switch (operador) {
  case 1:
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
    break;

  case 2:
    console.log(`${num1} - ${num2} = ${num1 - num2}`);
    break;

  case 3:
    console.log(`${num1} * ${num2} = ${num1 * num2}`);
    break;

  case 4:
    console.log(`${num1} / ${num2} = ${num1 / num2}`);
    break;
  default:
    console.log("Operação inválida!");
}
