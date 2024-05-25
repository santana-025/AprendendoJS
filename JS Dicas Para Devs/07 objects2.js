const todos = [  //Caso que mais acontece, pode usar todos os metodos Map,Reduce,Filter
    {           // um array com varios objectos dentro
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

console.log(todos[2].descição) // Pegando a descrição do item 2
// ou seja primeiro passa o indice como busca de array
// depois passa a propriedade que esta querendo pegar o seu valor
