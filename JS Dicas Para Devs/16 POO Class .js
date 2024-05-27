// Class são impressoras de objetos 
class Person {          // classe pessoa
    // Recebe uma função costrutora com as propriedades de parametros
    // que o objt pessoa tem que ter  
    constructor(primeironome, segundonome, idade) {
        this.primeironome = primeironome;
        this.segundonome = segundonome;
        this.idade = idade
    }
    // Podemos criar metodos
    nomecompleto() {
        console.log(` Meu nome é : ${this.primeironome} ${this.segundonome}`)
    }

    static saudacoes() {   // Metodos estaticos quando não ultiliza nenhuma propriedade da Person
        console.log("Olá, Tudo bem ?") // Não tem acesso aos This
    }

    falando() {
        console.log(`${this.primeironome}, Está Falando`)
    }

}

// Criando pessoa1
const pessoa1 = new Person("Jorge", "Dev", 22); // Sempre que usar new para ter acesso as propriedades e ao this
console.log(Person.saudacoes()) // Como é um metodo statico não pode usar dessa forma >  pessoa1.saudacoes()
console.log(pessoa1.nomecompleto()) // Nome completo da pessoa 1
console.log(pessoa1.falando()) // Pessoa 1 Falando

