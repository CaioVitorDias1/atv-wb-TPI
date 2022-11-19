import Cpf from "../models/cpf"
import Phone from "../models/phone"
import Products from "../models/products"
import Rg from "../models/rg"

export default class Client{
    public name:string
    public socialName:string
    private rgs: Array <Rg>
    private cpf: Cpf
    private signUpDate: Date
    private phones: Array <Phone>
    private consumedProducts: Array <Products>

    constructor(name:string, socialName:string, cpf:Cpf, phone:Phone, rg:Rg, signUpDate: Date){
        this.name = name
        this.socialName = socialName
        this.cpf = cpf
        this.rgs = []
        this.rgs.push(rg)
        this.signUpDate = signUpDate
        this.phones = []
        this.phones.push(phone)
        this.consumedProducts = []


    }

    public get getRgs(){
        return this.rgs
    }

    
    public get getCpf(){
        return this.cpf
    }

    public get getSignUpDate(){
        return this.signUpDate
    }

    public get getPhones(){
        return this.phones
    }

    public get getConsumedProducts(){
        return this.consumedProducts
    }
}