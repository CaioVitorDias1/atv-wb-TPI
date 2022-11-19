import promptSync from "prompt-sync";

export default class Input{
    public getNumber(message: string): number{
        let prompt = promptSync();
        let value = prompt(message);
        let number = new Number(value);
        return number.valueOf()
    }

    public getString(message: string): string{
        let prompt = promptSync();
        let string= prompt(message);
        return string
    }
} 


