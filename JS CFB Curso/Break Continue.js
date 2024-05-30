// break = Acaba o loop completo
// Continue = Para aquela exec e continua nos proximos comandos

let n = 0;
let max = 1000;

while (n < max) {
    console.log("Jhon" + n);
    if (n > 10) {
        break      // Para a exec
    }
    n++
} // Continua daqui
console.log("Fim do programa")


// Usando o Continue :
let pares = 0;

for (let i = 0; i < max; i++) {
    console.log(`Jhonn ${i}`)
    if (i % 2 != 0) {
        continue
    }
    pares++
}
console.log(`Qntd de Pares ${pares}`)
