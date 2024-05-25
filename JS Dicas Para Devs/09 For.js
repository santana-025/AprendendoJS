// Usa quando quer execultar o mesmo codigo varias vezes

for (let index = 0; index <= 10; index++) { //adiciona 1 em index cada loop, ate o valor de index ser menor ou igual a 10
    console.log(index)
}
// Return : 0,1,2,3,4,5,6,7,8,9,10

const carros = ["Gol", "Palio", "Golf"];    // Percorre o Array todo
for (let i = 0; i <= carros.length; i++) {  // enquanto i for menor que a quantidade de itens na lista carros
    console.log(carros[i])                  // loga Carros na possição do indice i criado no exemplo
}

for (let car of carros) {      // Para cada item no array 
    console.log(car);          // retorna os itens da lista  
}

carros.forEach(function (car) {     // Uma Função para cada item do array 
    console.log(car);               // que loga no console o proprio item
})


const person = {
    nome: "Jhon",
    idade: "22",
    apelido: "deev"
}
// Usase o for in para objectos
for (propriedade in person) {   // para cada propriedade no objeto
    console.log(person[propriedade]);   // retorna objeto na possição propriedade
}