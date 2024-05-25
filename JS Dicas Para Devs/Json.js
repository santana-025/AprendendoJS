const todos = [
    {
        id: 1,
        descição: "Estudar Programação",
        completa: false,
    },
    {
        id: 2,
        descição: "Ler",
        completa: true,
    },
    {
        id: 3,
        descição: "Treinar",
        completa: true,
    }
]

const ConvertendoJson = JSON.stringify(todos);   // Convertendo de Array para JSON
// Não conseguimos mais ultilizar mais os metodos de Arrays e é como se tornasse uma string porem no formato JSON
// Sempre manda assim para o servidor 

const ConvertendoLista = JSON.parse(ConvertendoJson); // Convertendo de Json PARA Array
//Agora conseguimos ultilizar todos os metodos de Array
// Ele sempre retorna Assim


console.log(ConvertendoJson)
console.log(ConvertendoLista) 