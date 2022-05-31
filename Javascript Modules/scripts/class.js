export class Person {
    constructor(name){
        this.name = name;
    }

    sayHello(name){
        console.log(`Hello ${name} saya adalah ${this.name}`);
    }
}