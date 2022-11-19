import optionInputs from "./src/services/optionInputs";
import Input from "./src/services/optionInputs"
import clientGet from "./src/services/clientGet"
import Client from "./src/entities/client";
import Company from "./src/entities/company";
import clientList from "./src/services/ClientList";
import ClientSignUp from "./src/services/clientSignUp";



console.log("Bem vindo a agencia!");

let serviceOn: boolean = true;
let input =  new Input()
const company = new Company()

while(serviceOn){
    console.log("escolha um servico:");
    console.log("1 = cadastrar clientes");
    console.log("2 = listar todos os clientes");
    console.log("0 = sair");

    let option = input.getNumber(`escolha o servico desejado: `)

    switch(option){
        case 1:
            const signingUp = new ClientSignUp(company.getClients())
            signingUp.signUp()
            break
        case 2:
            const clientes = new clientGet(company.getClients())
            clientes.listarClientes()
            break
        case 0:
            serviceOn = false
    }
}