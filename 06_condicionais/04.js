import leia from "readline-sync";

let opcao1;
let opcao2;
let opcao3;

opcao1 = leia.question("Escolha: vertebrado ou invertebrado ");

if (opcao1 == "vertebrado") {
  opcao2 = leia.question("Escolha: ave ou mamifero ");
  if (opcao2 == "ave") {
    opcao3 = leia.question("Escolha: carnivoro ou onivoro ");
    if (opcao3 == "carnivoro") {
      console.log("Águia");
    } else {
      console.log("Pomba");
    }
  } else {
    opcao3 = leia.question("Escolha: onivoro ou herbivoro ");
    if (opcao3 == "onivoro") {
      console.log("Homem");
    } else {
      console.log("Vaca");
    }
  }
}

if (opcao1 == "invertebrado") {
  opcao2 = leia.question("Escolha: inseto ou anelideo ");
  if (opcao2 == "inseto") {
    opcao3 = leia.question("Escolha: hematofago ou herbivoro ");
    if (opcao3 == "hematofago") {
      console.log("Pulga");
    } else {
      console.log("Lagarta");
    }
  } else {
    opcao3 = leia.question("Escolha: hematofago ou onivoro ");
    if (opcao3 == "onivoro") {
      console.log("Minhoca");
    } else {
      console.log("Sanguessuga");
    }
  }
}
