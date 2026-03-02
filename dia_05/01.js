const leia = require('readline-sync');

let salario;
let abono;
let novoSalario;

salario = leia.questionFloat("Digite o seu salario: ");
abono = leia.questionFloat("Digite o seu abono: ");
novoSalario = salario + abono;

console.log(`Seu salario total é: ${novoSalario}`);
