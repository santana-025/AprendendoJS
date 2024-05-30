// Forma de simplificar uma operação if else

let num = 10

let res = num % 2

// if (res === 0) {
// console.log("Número PAR")
// } else {
//     console.log("Número IMPAR")
// }

// Como operador ternario 
// como % retorna 0 e 1 a negação é para inverter
let resultado = (!(num % 2) ? "par" : "Impar");
console.log(resultado);

// operação ? true : false; 

