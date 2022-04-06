export class Ingredient{
    // public name: string;
    // public amount: number;
    // constructor(name: string, amount: number) {
    //     this.name = name;
    //     this.amount = amount;
    // }
    //shortcut

    constructor(public name:string, public amount:number) {
    }
    //add an accesot in front of the property - public
    //"public" keyword - automat  se vor crea doua proprietati cu numele nama si amount
    //iar acestor doua proprietati create li se vor atribui valorile primite in constructor
}