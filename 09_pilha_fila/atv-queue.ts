import { Queue } from "./Queue";
import readlinesync = require("readline-sync");

const fila = new Queue<string>();
let continuar: boolean = true;
let opcao: number = 0;

do {
    console.log("----------------------- Inicio do Programa -----------------------");
    console.log("1 - Adicionar cliente na Fila");
    console.log("2 - Listar todos os clientes");
    console.log("3 - Retirar Cliente da Fila");
    console.log("0 - Sair");

    opcao = readlinesync.questionInt("Escolha uma opcao: ");

    switch(opcao){
    case 1:
        fila.enqueue(readlinesync.question("Digite o nome do cliente: "));
        console.log("----------------------- Cliente Adicionado -----------------------");
        fila.printQueue();
        break;
    
    case 2:
        console.log("----------------------- Lista de clientes na fila -----------------------");
        fila.printQueue();
        break;
    
    case 3:
        if(fila.isEmpty()){
            console.log("----------------------- A fila esta vazia -----------------------");
        }else{
        fila.dequeue();
        console.log("----------------------- Fila:  -----------------------");
        fila.printQueue();
        console.log("----------------------- O cliente foi chamado  -----------------------");
        }
        break;
    
    case 0:
        continuar = false;
        console.log("----------------------- Programa Finalizado -----------------------");
        break;

}

}while(continuar);
