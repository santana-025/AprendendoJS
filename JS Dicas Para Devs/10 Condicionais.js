const soma = 1 + 2
if (soma === 2) {   // == : Somente os valores iguais; === : Valor e Tipo iguais 
    console.log("A Soma é 2")
} else if (soma === 3) {
    console.log("A soma é Igual a 3")
} else {
    console.log("Não é igua a 2")
}

// Operador ternario

let number;
if (soma1 === 2) {
    number = 2
} else {
    number = 4
}

// Usando o Operador ternario mesmo codigo de cima 
number = soma1 === 2 ? 2 : 4; //Se soma for igual a 2, number = 2
console.log(number)           // Caso contrario number = 4  


// && : e : and = são as mesmas coisas
// || : ou : or = são as mesmas coisas
// no JavaScript usa somente && e ||

const soma1 = 2 + 2;
const soma2 = 3 + 5;

if (soma1 === 4 && soma2 === 6) {   // Só funciona se as duas condição for verdade
    console.log("A soma é 4 e a soma dois é 6"); // Falso
}

if (soma1 === 4 || soma2 === 6) {   // Só funciona se uma das duas condição for verdade
    console.log("A soma é 4 e a soma dois é 6"); // True
}

