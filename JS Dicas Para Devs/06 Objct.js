const person = {        // Objetos em JS {}
    primeiro_nome: "Jhon",  // Propriede : valor
    segundo_nome: "Deev",
    idade: "22",
    hobbies: ["Futebol", "Games", "Programação", "Violão"],
    dog: {          // Podemos usar um obj dentro de outro obj
        nome: "zooe",
        idade: "3",
        cor: "Preto"
    }
}

// const primeiro_nome = person.primeiro_Nome;
// const segundo_nome = person.segundo_Nome;
// const idade = person.idade;
// const hobbies = person.hobbies;


// Mesma coisa acima tem que ter os mesmos nomes das propriedades do objeto
// const { primeiro_nome, segundo_nome, idade, hobbies } = person

// para renomear usando o destructin >> primeiro_nome: primeiro,
const {
    primeiro_nome: primeiro, segundo_nome, idade, hobbies,
    dog: nome, idade: idadedog, cor
} = person

// Adicionar mais propriedades
//person.dogin = "Zoee" pode ser assim ou direto la encima no objeto



console.log(person.dog.idade)
console.log(primeiro)
console.log(segundo_nome)
console.log(idade)
console.log(hobbies[1])
console.log(person)