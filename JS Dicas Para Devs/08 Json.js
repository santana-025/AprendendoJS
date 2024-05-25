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
// Não conseguimos mais ultilizar mais os metodos de Arrays é como se tornasse uma string porem no formato JSON
// Sempre manda assim para o servidor 

const ConvertendoLista = JSON.parse(ConvertendoJson); // Convertendo de JSON para Array
//Agora conseguimos ultilizar todos os metodos de Array
// O servidor sempre retorna Assim


console.log(ConvertendoJson) // Retorna mais ou menos uma String arquivo JSON
console.log(ConvertendoLista) // Retorna um array que foi convertido