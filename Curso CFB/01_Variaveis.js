// console.log("Olá Mundo");

// Formas para criação de nomes de variaveis
//SnakeCase = nome_Jorge
//CamelCase = nomeJorge

"use strict"// Modo Estrito Algumas linguagem so funciona nesse modo
nome = "Jorge"; // no modo Restrito funciona normal (tem varias outras vantagens)


// uso do console log >>
console.log("Texto", 9) //  loga uma String ou numero 
console.log(nome)       // loga uma Variavel
console.log(nome + "Sobrenome") // Concatenando variavel com string

var vulgo = "Jhonn";          // Declarando com o var 
let idade = 22;               // Declarando com o let
const cidade = "NewHorozont"; // Declarando com o const    

/* 
var             = Uso Global funciona em todos os escopos 
icada           : sim, Pode ser usada antes da declaração, pois sobe pra o topo do codigo
redeclaravel    : sim, Quantas vezes necessario
mudar valores   : sim, Sempre que quiser


let             = Uso Local, Funciona no bloco de codigo que está, e os que foram criados denrtro dele 
icada           : Não           (preferencia de uso)
redeclaravel    : Não pode redeclarar
mudar conteudo  : sim, Sempre que quiser


const           = Uso Local , Funciona no bloco de codigo que está, e os que foram criados denrtro dele 
icada           : Não
redeclaravel    : Não'
mudar conteudo  : Não
*/

function textevariaveis() {
    if (true) {
        let nome = "Jorge"  // se for com var funciona em todos os lugares
        console.log(nome)   // Aqui ja funciona 
    }
    console.log(`Aqui funciona se for o let e o const for declarado daqui pra frete`)
}
console.log("Aqui está fora do texte nome não existe")
