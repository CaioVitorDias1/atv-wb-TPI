import Client from "../entities/client";
import Cpf from "../models/cpf";
import Phone from "../models/phone";
import Rg from "../models/rg";
import ClientCreation from "./clientCreation";
import Input from "./optionInputs";

export default class ClientSignUp extends ClientCreation{
        private client: Array<Client>;
        private input: Input;

    

   constructor(newClient: Array<Client>){
        super()
        this.client = newClient;
        this.input = new Input();
    }


    public signUp(): void {
        console.log(`Cadastrando um cliente: `)
        const name = this.input.getString(`Insira o nome do cliente: `)

        const socialName = this.input.getString(`Insira o nome social do cliente: `)

        const cpfNumber = this.input.getString(`Insira o CPF do cliente: `)
        const cpfEmission = this.input.getString(`Insira a data de emissao do cpf do cliente, no formato dd/mm/yyyy: `)
        const brokenDateCpf = cpfEmission.split('/')
        const day = new Number(brokenDateCpf[0].valueOf()).valueOf()
        const month = new Number(brokenDateCpf[1].valueOf()).valueOf()
        const year = new Number(brokenDateCpf[2].valueOf()).valueOf()

        const dddPhone = this.input.getString(`Insira o ddd do cliente: `)
        const phoneNumber = this.input.getString(`Insira o telefone do cliente: `)

        const rgNumber = this.input.getString(`Insira o rg do cliente: `)
        const rgEmission = this.input.getString(`Insira a data de emissao do rg do cliente, no formato dd/mm/yyyy: `)
        const brokenDateRg = rgEmission.split('/')
        const dayRg = new Number(brokenDateRg[0].valueOf()).valueOf()
        const monthRg = new Number(brokenDateRg[1].valueOf()).valueOf()
        const yearRg = new Number(brokenDateRg[2].valueOf()).valueOf()

        const signUpDate = this.input.getString(`Insira a data de cadastro do cliente, no formato dd/mm/yyyy: `)
        const brokenDateSign = signUpDate.split('/')
        const daySign = new Number(brokenDateSign[0].valueOf()).valueOf()
        const monthSign = new Number(brokenDateSign[1].valueOf()).valueOf()
        const yearSign = new Number(brokenDateSign[2].valueOf()).valueOf()

        const emissionDateRg = new Date(yearRg, monthRg, dayRg)
        const rg = new Rg(rgNumber, emissionDateRg)

        const phone = new Phone(dddPhone, phoneNumber)
        

        const emissionDateCpf = new Date(year, month, day)
        const CPF = new Cpf(cpfNumber, emissionDateCpf)

        const dateSignUp = new Date(yearSign, monthSign, daySign)

        const client = new Client(name, socialName, CPF, phone, rg, dateSignUp)

        this.client.push(client)
        console.log(`Fim do cadastro!`)
    }

}