import readlinesync = require("readline-sync");

const valores = new Set<number>([2, 5, 1, 3, 4, 9, 7, 8, 10, 6]);
let num;
let encontrado = false;

num = readlinesync.questionInt("Digite o numero que voce deseja encontrar: ");

for (let valor of valores) {
  if (valores.has(num)) {
    encontrado = true;
  }
}

if (encontrado === false) {
  console.log(`O numero ${num} nao foi encontrado!`);
}else{
    console.log(`o numero ${num} foi encontrado`);
}
