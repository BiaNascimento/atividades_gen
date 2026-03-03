import leia from "readline-sync";

let nome;
let cargo;
let salario;

nome = leia.question("Digite o nome do colaborador: ");
cargo = leia.questionInt("Digite o codigo do cargo do colaborador de 1 a 6: ");
salario = leia.questionFloat("Digite o salario do Colaborador: ");

switch (cargo) {
  case 1:
    console.log(
      `Nome do Colaborador: ${nome} \nCargo: Gerente \nSalario Reajustado: ${salario + 0.1 * salario} `,
    );
    break;
  case 2:
    console.log(
      `Nome do Colaborador: ${nome} \nCargo: Vendedor \nSalario Reajustado: ${salario + 0.07 * salario} `,
    );
    break;
  case 3:
    console.log(
      `Nome do Colaborador: ${nome} \nCargo: Supervisor \nSalario Reajustado: ${salario + 0.09 * salario} `,
    );
    break;
  case 4:
    console.log(
      `Nome do Colaborador: ${nome} \nCargo: Motorista \nSalario Reajustado: ${salario + 0.06 * salario} `,
    );
    break;
  case 5:
    console.log(
      `Nome do Colaborador: ${nome} \nCargo: Estoquista \nSalario Reajustado: ${salario + 0.05 * salario} `,
    );
    break;
  case 6:
    console.log(
      `Nome do Colaborador: ${nome} \nCargo: Tecnico de TI \nSalario Reajustado: ${salario + 0.08 * salario} `,
    );
    break;
  default:
    console.log("O código digitado não existe");
}
