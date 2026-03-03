import leia from "readline-sync";

let saldo = 1000.0;
let operacao;
let valorSaque;
let valorDeposito;
let saldoFormat = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
}).format(saldo);

operacao = leia.questionInt("Digite o Codigo da Operacao de 1 a 3: ");

switch (operacao) {
  case 1:
    console.log(`Saldo: ${saldoFormat}`);
    break;

  case 2:
    valorSaque = leia.questionFloat("Digite o valor do saque: ");
    if (valorSaque <= saldo) {
      saldo = saldo - valorSaque;
      console.log(`Operacao - Saque \nNovo Saldo: ${saldo}`);
    } else {
      console.log("Operacao - Saque \nSaldo Insuficiente");
    }
    break;

  case 3:
    valorDeposito = leia.questionFloat("Digite o valor do deposito: ");
    saldo = saldo + valorDeposito;
    console.log(`Operacao - Deposito \nNovo Saldo: ${saldo}`);
    break;

  default:
    console.log("Operação inválida!");
}
