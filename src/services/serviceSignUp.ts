import CompanyServices from "../entities/companyServices";
import Input from "./optionInputs";
import ServiceCreation from "./serviceCreation";

export default class ServiceSignUp extends ServiceCreation{
    public companyServices: Array<CompanyServices>
    private input: Input;

    constructor(newService: Array<CompanyServices>){
        super()

        this.companyServices = newService
        this.input = new Input()
    }


    public signUp(): void{
        console.log("cadastrando um serviço: ")

        const name = this.input.getString(`Nome do serviço oferecido: `)
        const price = this.input.getString(`Preço do serviço oferecido: `)

        const service = new CompanyServices(name, price)

        this.companyServices.push(service)
        console.log("fim do cadastro do serviço!")
    }
}