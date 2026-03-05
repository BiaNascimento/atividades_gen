import readlinesync from "readline-sync";

let numeros = new Set<number>();

for (let i = 0; i < 10; i++){
    numeros.add(readlinesync.questionInt("Digite um numero inteiro: "));
}

console.log(numeros);