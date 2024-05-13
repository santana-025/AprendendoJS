
// Criando um array vazio
let num = [5, 4, 6, 2, 1];
num.push(9); //adicionando o 9 no final
num.sort();  //ordena em ordem cresente
console.log(num) // mostra o array sem formatação [valores]
console.log(`o vetor tem ${num.length} posição`) // .length tamanho do vetor 
console.log(`o primeiro valor é ${num[0]}`) // Primeiro valor sempre sera 0
//Mostrando sem os conchetes 
for (let c = 0; c < num.length; c++) {
    console.log(`A posição ${c} tem o valor ${num[c]}`);
}
//Usando o FOR IN
for (let pos in num) {
    console.log(num[pos]);
}
// Buscar um valor dentro com o indexOf(7) ele retorna se tiver e retorna a posição e se não tiver retorna -1
console.log(num);
let posição = num.indexOf(9);
if (posição == -1) {
    console.log("O valor não foi encontrado")
} else {
    console.log(`Esta na possição ${posição}`)
}