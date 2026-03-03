import leia from "readline-sync";

let num;
let par;
let positivo;

num = leia.questionInt("Digite um numero: ");

if (num % 2 === 0 && num >= 0) {
  console.log(`O numero ${num} é par e positivo`);
} else if (num % 2 != 0 && num >= 0) {
  console.log(`O número ${num} é ímpar e positivo`);
} else if (num % 2 === 0 && num < 0) {
  console.log(`O número ${num} é par e negativo`);
} else {
  console.log(`O número ${num} é ímpar e negativo`);
}
