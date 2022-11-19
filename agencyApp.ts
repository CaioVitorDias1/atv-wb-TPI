import optionInputs from "./src/services/optionInputs";
import Input from "./src/services/optionInputs"
import clientGet from "./src/services/clientGet"
import Client from "./src/entities/client";
import Company from "./src/entities/company";
import clientList from "./src/services/ClientList";
import ClientSignUp from "./src/services/clientSignUp";
import ProductCreation from "./src/services/productCreation";
import ProductSignUp from "./src/services/productSignUp"
import ServiceSignUp from "./src/services/serviceSignUp";
import ConsumedProducts from "./src/services/consumedProducts";
import ConsumedServices from "./src/services/consumedServices";


console.log("Bem vindo a agencia!");

let serviceOn: boolean = true;
let input =  new Input()
const company = new Company()

while(serviceOn){
    console.log("escolha um servico:");
    console.log("1 = cadastrar clientes");
    console.log("2 = listar todos os clientes");
    console.log("3 = cadastrar um produto");
    console.log("4 = cadastrar um serviço");
    console.log("5 = adicionar produto ao cliente");
    console.log("6 = adicionar serviço ao cliente");
    console.log("7 = listagem dos 10 clientes que mais consumiram produtos ou serviços em quantidade");
    console.log("8 = listagem de todos os clientes por genero");
    console.log("9 = listagem dos produtos ou serviços mais consumidos");
    console.log("10 = listagem dos 10 clientes que menos consumiram produtos ou serviços");
    console.log("11 = listagem dos 5 clientes que mais consumiram produtos ou serviços em valor");
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

        case 3:
            const addProduct = new ProductSignUp(company.getProducts())
            addProduct.signUp()
            break

        case 4:
            const addService = new ServiceSignUp(company.getServices())
            addService.signUp()
            break

        case 5:
            const consumeProduct = new ConsumedProducts()
            consumeProduct.consumeProduct()
            break

        case 6:
            const consumeService = new ConsumedServices()
            consumeService.consumeService()
            break
        case 0:
            serviceOn = false
    }
}