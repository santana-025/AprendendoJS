const numeros = [1, 2, 3, 4, 5];
//Multiplicar todos os itens por 2 melhor maneira é o Metodo MAP
//Basicamente ele execulta uma função em cada item e retorna uma nova lista

const NumerosMultPor2 = numeros.map(function (item) {
    return item * 2 //(Tem que retorna algo)
})

console.log(NumerosMultPor2)