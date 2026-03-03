import leia from "readline-sync";

let cod;
let quantidade;

cod = leia.questionInt("Escolha o codigo do produto de 1 a 6: ");
quantidade = leia.questionInt("Digite quantos produtos ");

switch (cod) {
  case 1:
    console.log(`Produto: Cachorro Quente. \nValor Total: ${10 * quantidade}`);
    break;
  case 2:
    console.log(`Produto: X-Salada. \nValor Total: ${15 * quantidade}`);
    break;
  case 3:
    console.log(`Produto: X-Bacon. \nValor Total: ${18 * quantidade}`);
    break;
  case 4:
    console.log(`Produto: Bauru. \nValor Total: ${12 * quantidade}`);
    break;
  case 5:
    console.log(`Produto: Refrigerante. \nValor Total: ${8 * quantidade}`);
    break;
  case 6:
    console.log(`Produto: Suco de Laranja. \nValor Total: ${13 * quantidade}`);
    break;
  default:
    console.log("O código digitado não existe");
}
