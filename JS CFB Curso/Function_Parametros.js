// Funções com parametros 
// nome(parametros) = pode ter quantos necessarios

function soma(n1 = 0, n2 = 0) {
    console.log(n1 + n2);
}

//  (n1, n2)
soma(10, 5);

// Caso não passe nenhum valor podemos fazer o defalt
//function soma(n1=0,n2=0);

//  (n1, vazio) 
soma(5);
// return 5+0 pois deixamos o valor n2 =0 ( Caso não tenha é = 0)

// Dica bonus
const valor_Padrao = 0

function mult(n1 = valor_Padrao, n2 = valor_Padrao) {
    return n1 * n2
}
console.log(mult(5))


// Outro Exemplo

let valor = 0
function add(v) {
    valor += v
}

add(5);     // Vai somando no valor 
add(15);
add(35);
console.log(valor)