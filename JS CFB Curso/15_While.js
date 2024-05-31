// ultilizamos quando não temos certeza de quando vai parar
// While = Enquanto
// while(expressão) {bloco de comando}

let n = 0
while (n <= 10) {
    console.log(n)
    n++ // Mudando a variavel pois se não nunca vai mudar
}

// Fatorial

let nn = 5;
let fat = 1;
while (nn >= 1) {
    fat = fat * nn
    nn--
}
console.log(fat)
