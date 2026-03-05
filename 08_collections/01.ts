import readlinesync from "readline-sync";


const cores = new Array<string>(5);

for(let i = 0; i < cores.length; i++){
    cores[i] = readlinesync.question("Escreva uma cor: ");
}

console.log(`Cores recebidas: ${cores}`);
cores.sort();
console.log(`Cores ordenadas: ${cores}`);

