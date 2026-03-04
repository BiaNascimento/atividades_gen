import leia from "readline-sync";

let num;
const par = [];
const impar = [];

for (let i = 0; i < 10; i++) {
  num = leia.questionInt(`Digite o ${i + 1} numero `);
  if (num % 2 === 0) {
    par.push(num);
  } else {
    impar.push(num);
  }
}

console.log(
  `Total de numeros pares: ${par.length} \nTotal de numeros impares: ${impar.length}`,
);
