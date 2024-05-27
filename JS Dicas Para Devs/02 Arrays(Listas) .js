const nomes = ["Jorge", "João", 2, true] // Lista com qualquer valor dentro [ ]
//  Para acessar qualquer elemento da lista
console.log(nomes[3]); // Basta passar o indice do elemento sempre comerça em 0
nomes.push("Pedro")    // Adiciona valor no final da lista 
nomes.unshift("22")    // Adiciona no inicio qualquer valor
nomes.pop()            // Remove o ultimo parametro e retorna ele 
nomes.shift()          // Remove o Primeiro
nomes[2] = "Jhonn"     // Muda os dados do indice especificado

const tamanho = nomes.length
console.log(nomes.sort())          // Ordena a lista 
console.log(tamanho)               // Quantidade de itens na lista 
console.log(nomes.indexOf("João")) // Retorna o indice de joão, caso não tenha resultado é -1
