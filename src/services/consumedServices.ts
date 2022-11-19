import Client from "../entities/client";
import Company from "../entities/company";
import CompanyServices from "../entities/companyServices";
import Product from "../entities/product";
import Input from "./optionInputs";

export default class ConsumedServices {
    public availableServices: Array<CompanyServices>
    public clientBuyer: Array<Client>
    public company = new Company()
    public input = new Input()
    


    constructor(){
        this.availableServices = []
        this.availableServices = this.company.getServices()
        

        this.clientBuyer = []
        this.clientBuyer = this.company.getClients()

    }

    
    public consumeService(){
        console.log("Adicionando um serviço a um cliente! ")
        console.log("lista dos clientes: ")
        console.log(this.clientBuyer)
        const costumer = this.input.getString(`Quem é o consumidor?: `)

        /*fazer um ciclo que le todos os valores da lista enquanto compara se o valor 
        é igual ao escolhido*/ 

        console.log("lista de serviços disponiveis: ")
        console.log(this.availableServices)
        const consume = this.input.getString(`Que serviçoS foi consumido?: `)

        /*fazer um ciclo que le todos os valores da lista enquanto compara se o valor 
        é igual ao escolhido*/ 

        /*pegar o produto e colocar na lista de produto do cliente*/
    }

}