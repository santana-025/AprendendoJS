// Função com parametros inderterminado 

function soma(...numeros) { // basta usar o operador spread, transformando em array
    let s = 0;
    for (let v of numeros) {
        s += v;
    } return s      // Lembrando que no final do loop vamos retornar o valor de s
}

console.log(soma(12, 15, 3));
