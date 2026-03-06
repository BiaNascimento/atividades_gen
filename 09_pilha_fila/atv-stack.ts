import { Stack } from "./Stack";
import readlinesync = require("readline-sync");

const pilha = new Stack<string>();
let continuar: boolean = true;
let opcao: number = 0;

do {
    console.log("----------------------- Inicio do Programa -----------------------");
    console.log("1 - Adicionar livro na pilha");
    console.log("2 - Listar todos os livros");
    console.log("3 - Retirar livro da pilha");
    console.log("0 - Sair");

    opcao = readlinesync.questionInt("Escolha uma opcao: ");

    switch(opcao){
    case 1:
        pilha.push(readlinesync.question("Digite o nome do livro: "));
        console.log("----------------------- Livro Adicionado -----------------------");
        pilha.printStack();
        break;
    
    case 2:
        console.log("----------------------- Lista de Livros na Fila -----------------------");
        pilha.printStack();
        break;
    
    case 3:
        if(pilha.isEmpty()){
            console.log("----------------------- A fila esta vazia -----------------------");
        }else{
        pilha.pop();
        console.log("----------------------- Um livro foi retirado da fila -----------------------");
        pilha.printStack();
        }
        break;
    
    case 0:
        continuar = false;
        console.log("----------------------- Programa Finalizado -----------------------");
        break;

}

}while(continuar);
