import Client from "./client"
import CompanyServices from "./companyServices"
import Product from "./product"

export default class Company{
    private products: Array<Product>
    private clients: Array<Client>
    private services: Array<CompanyServices>

    constructor(){
        this.clients = []
        this.products = []
        this.services = []
    }

    public getClients(){
        return this.clients
    }

    public getProducts(){
        return this.products
    }

    public getServices(){
        return this.services
    }
}