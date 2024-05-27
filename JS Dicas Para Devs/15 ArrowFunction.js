// Temos que Declarar ela dentro de uma variavel ex:
// Retira o nome Function 
// (parametros)  +   =>  +   {Bloco de codigos} ou Return
const somaArrow = (a = 1, b = 1) => {
    console.log(a, b);
    return a + b
}
console.log(somaArrow(10, 20));     // return: 30

// Se for fazer retorno com uma unica linha podemos fazer o seguinte
// (parametros) +   =>   +   return   ex:

const diminuindoArrow2 = (a = 1, b = 1) => a - b;
console.log(diminuindoArrow2(30, 10)); // Return 20