export default class Cpf{
    private value:string
    private dateCreation: Date

    constructor(value:string, dateCreation: Date){
        this.value = value
        this.dateCreation = dateCreation
    }


    public get getValue(){
        return this.value
    }

    public get getDateCreation(){
        return this.dateCreation
    }
}