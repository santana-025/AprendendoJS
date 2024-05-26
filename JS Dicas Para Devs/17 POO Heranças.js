class Animal {
    constructor(name) {
        this.name = name;
    }

    fazendobarulho(name) {
        console.log(`${this.name}, Fez algum Barulho.`)
    }
}
class Dog extends Animal {      // extende de animal tem todos os metodos da classe animal 
    constructor(name) {     // Tem que receber os mesmo parametros
        super(name)     // Chama o constuctor da classe animal passando seu parametro
    }

    fazendobarulho(name) {  // Conseguimos torna esse metodo diferente para a classe cão 
        console.log(`${this.name}, Latiu !`) // ja que não fala eles late   
    }

}

const animal1 = new Animal("bob");
const cao1 = new Dog("Zoe")
console.log(animal1.fazendobarulho())
console.log(cao1.fazendobarulho())
