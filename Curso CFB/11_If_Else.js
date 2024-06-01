// Condicional if e else
// if(condição){verdade}else{falso};

// se expressão condicional for vdd senão falso
// o que esta dentro das { Bloco de comandos}

let num = 100
if (num > 10) {  // Se num for maior que 10
    console.log("Numero maior que 10")  // verdade Faz isso
    if (num > 50) { //if aninhado, ou seja um if dentro do outro
        console.log("Numero maior que 50");
    }
} else if (num > 5) {
    console.log("Numero entre 6 e 10")

} else {
    console.log("Numeral menor ou igual a 5")
}
console.log("Fim do programa")

// Exemplo 2

let energia = 69
let clima = "Sol"

if (energia >= 70 && clima === "Sol") {
    console.log("vou a praia");
} else {
    console.log("Vou ao cinema")
}