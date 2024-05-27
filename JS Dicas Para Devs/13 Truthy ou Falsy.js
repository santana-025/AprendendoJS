// Para ver se é True ou False >> !!
console.log(!!msg, !!num, !!vazio, !!semdefinir); // Exemplo

var msg, num, vazio, semdefinir;

msg = '';              // String vazia sempre é False
num = 0;               // 0 Sempre é False
vazio = null;          // null é False
semdefinir = undefined // undefined é False
// Se colocar algo disso no if nunca vai rodar o if so roda true


const lista = [];         // Array Vazio é True
const objt = {};          // objt Vazio é True

console.log(!!lista, !!objt)
// para checsar se a lista está vazia
if (lista.length > 0) {     // se a quantidade de itens na lista 
    console.log(lista)      // é maior que 0
}

// Para inverter o Boleano atual usase o >> ! na frente do item
// Se era falso passa a ser True
// Se era True passa a ser False