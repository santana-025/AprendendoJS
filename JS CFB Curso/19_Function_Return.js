function canal() {
    return "JhonDev"   // ela retorna um valor pra quem chamou
}   // Tem que ser colocado em uma variavel ou no console log


let nome = canal();
console.log(canal()); // Dentro de um console.log
console.log(nome);    // De dentro de uma variavel 

// Podemos ter mais de um retorno 
// Porem se for caso de condições 
// pois somente 1 vai ser retornado
function numbers() {
    let n1 = 10
    let n2 = 3
    let resposta = n1 + n2;
    if (resposta % 2 == 0) {
        return "Par"
    } else {
        return "Impar"
    }
}

let resposta_numbers = numbers();
console.log(resposta_numbers)
