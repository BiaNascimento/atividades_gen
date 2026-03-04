import leia from "readline-sync";

let num = 0;
const menor = [];
const maior = [];

while (num >= 0) {
  num = leia.questionInt("Digite uma idade: ");
  if (num < 21 && num > 0) {
    menor.push(num);
  } else if (num > 50 && num > 0) {
    maior.push(num);
  }
}

console.log(
  `Total de pessoas menores de 21 anos: ${menor.length} \nTotal de pessoas maiores de 50 anos: ${maior.length}`,
);
