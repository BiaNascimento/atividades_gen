import leia from "readline-sync";

let nome;
let idade;
let primeiraDoacao;

nome = leia.question("Digite o nome do doador: ");
idade = leia.question("Digite a idade do doador: ");
primeiraDoacao = leia.keyInYN("Primeira doacao de sangue? ");

if (idade < 18 || idade > 69) {
  console.log(`${nome} não está apto para doar sangue!`);
} else if (idade >= 60 && idade < 69) {
  if (primeiraDoacao === true) {
    console.log(`${nome} não está apto para doar sangue!`);
  } else {
    console.log(`${nome} está apto para doar sangue!`);
  }
} else {
  console.log(`${nome} está apto para doar sangue!`);
}
