//  ... Quebra um array e devolve elementos por elementos

let n1 = [10, 20, 30, 40, 50,];
let n2 = [11, 22, 33];
let n3 = [...n1, ...n2];

console.log("n3:" + n3);

// Vantagens 
let jogador1 = { nome: "jhon", Energia: 100, velocidade: 80 }
let jogador2 = { nome: "jhon", Energia: 100, magia: 150 }
let jogador3 = { ...jogador1, ...jogador2 }

console.log(jogador3);
// nome, energia, velocidade e magia

// USANDO Em Funções 
const soma = (v1, v2, v3) => v1 + v2 + v3;
let valores = [1, 5, 4]
console.log(soma(...valores)); // Return 10 
// Ele espalha o valor para cada parametro de entrada mesmo que tenha mais q 3 valores
// Ele pega os 3 primeiros.

//No HTML

//  const objs1 = document.getElementsByTagName("div");  ===  Com htmlcoletios retorna 3 div sem poder mecher
//  const objs2 = [...document.getElementsByTagName("div")]; === Com spread retorna um array e podemos usar seus metodos e adicionar elementos diferentes
