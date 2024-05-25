const person = {        // Objetos em JS
    primeiro_nome: "Jhon",
    segundo_nome: "Deev",
    idade: "22",
    hobbies: ["Futebol", "Games", "Programação", "Violão"],
    dog: {          // Podemos usar um obj dentro de outro obj
        nome: "zooe",
        idade: "3",
        cor: "Preto"
    }
}

//const primeiro_nome = person.Primeiro_Nome;
//const segundo_nome = person.Segundo_Nome;
//const idade = person.Idade;
//const hobbies = person.Hobbies;


// Mesma coisa acima 
//const { primeiro_nome, segundo_nome, idade, hobbies } = person

// para renomear usando o destructin
const {
    primeiro_nome: primeiro, segundo_nome, idade, hobbies,
    dog: nome, idade: idadedog, cor
} = person

// Adicionar mais propriedades forma
//person.dogin = "Zoee"


console.log(person.dog.idade)
console.log(primeiro)
console.log(segundo_nome)
console.log(idade)
console.log(hobbies[1])
console.log(person)