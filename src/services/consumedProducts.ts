import Client from "../entities/client";
import Company from "../entities/company";
import Product from "../entities/product";
import Input from "./optionInputs";

export default class ConsumedProducts {
    public availableProducts: Array<Product>
    public clientBuyer: Array<Client>
    public company = new Company()
    public input = new Input()
    


    constructor(){
        this.availableProducts = []
        this.availableProducts = this.company.getProducts()
        

        this.clientBuyer = []
        this.clientBuyer = this.company.getClients()

    }

    
    public consumeProduct(){
        console.log("Adicionando um produto a um cliente! ")
        console.log("lista dos clientes: ")
        console.log(this.clientBuyer)
        const costumer = this.input.getString(`Quem é o consumidor?: `)

        /*fazer um ciclo que le todos os valores da lista enquanto compara se o valor 
        é igual ao escolhido*/ 

        console.log("lista de produtos disponiveis: ")
        console.log(this.availableProducts)
        const consume = this.input.getString(`Que produto foi consumido?: `)

        /*fazer um ciclo que le todos os valores da lista enquanto compara se o valor 
        é igual ao escolhido*/ 

        /*pegar o produto e colocar na lista de produto do cliente*/
    }

}