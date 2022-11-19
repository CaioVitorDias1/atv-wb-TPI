import Product from "../entities/product";
import ProductCreation from "./productCreation";
import Input from "./optionInputs";

export default class ProductSignUp extends ProductCreation{
    public products: Array<Product>
    private input: Input;

    constructor(newProduct: Array<Product>){
        super()

        this.products = newProduct
        this.input = new Input()
    }


    public signUp(): void{
        console.log("cadastrando um produto: ")

        const name = this.input.getString(`Nome do produto: `)
        const preco = this.input.getString(`Preço do produto: `)

        const produto = new Product(name, preco)

        this.products.push(produto)
        console.log("fim do cadastro de produto!")
    }
}