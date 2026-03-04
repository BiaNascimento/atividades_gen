import leia from "readline-sync";

let vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];
let num;
let encontrado = false;

num = leia.questionInt("Digite o numero que voce deseja encontrar: ");

for (let i = 0; i < vetor.length; i++) {
  if (num === vetor[i]) {
    console.log(
      `O numero ${num} esta localizado na posicao: ${vetor.indexOf(num)} `,
    );
    encontrado = true;
  }
}

if (encontrado === false) {
  console.log(`O numero ${num} nao foi encontrado!`);
}
