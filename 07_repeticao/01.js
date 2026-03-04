import leia from "readline-sync";

let num1, num2;

num1 = leia.questionInt("Digite o primeiro numero do intervalo: ");
num2 = leia.questionInt("Digite o segundo numero do intervalo: ");

if (num2 < num1) {
  console.log("Intervalo Invalido!");
} else {
  console.log(`No intervalo entre ${num1} e ${num2}`);
}

for (let i = num1; i <= num2; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} é múltiplo de 3 e 5`);
  }
}
