var n1 = 10;
var n2 = 11;

var res = 10 & 11;
console.log(res); // Return 10 ?? 
// Aonde houver equivalencia na comparação dos numeros binarios
// ele vai retornar um numero binario

// 1 com 1 = tem equivalencia 1
// 0 com 1 = não tem equivalencia 0
// 0 com 0 = não tem equivalencia 0

var n1 = 10;
var n2 = 11;

var res = 10 | 11;
console.log(res); // Return 11 ??
// Aonde houver o bit 1 independente da equivalencia ele retorna 1

// 1 com 1 = tem equivalencia 1
// 0 com 1 = não tem equivalencia 1
// 0 com 0 = não tem equivalencia 0

var n1 = 10;
var n2 = 11;

var res = 10 ^ 11;
console.log(res); // Return 1 ??
// Aonde houver o bit 1 sem equivalencia ele retorna 1

// 1 com 1 = tem equivalencia 0
// 0 com 1 = não tem equivalencia 1
// 0 com 0 = não tem equivalencia 0

// Operação de Deslocamento de BIT

var n1 = 10;        // 00001010  << 1 = 00010100 

var res = 10 << 1;  // Deslocando pra esquerda 1
console.log(res); // Return 

// Bitwise que desloca os Bits do elemento para esquerda ou direita
// Ele desloca a quantidade de numeros que queremos e adiciona 0 no lugar vazio

// << 1 Para a esquerda dobra o valor
// >> 1 Para a direita divide o valor

// Caso coloque 2 ele dobra 2x
// Caso coloque 2 ele divide 2x