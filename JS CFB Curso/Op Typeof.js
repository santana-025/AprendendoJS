// Basicamente mostra o tipo com exatidão do que estamos usando
let v1 = 10;
let v2 = "10";
let v3 = v1 === v2;
let v4 = { nome: "Jorge" };

console.log(v1, v2, v3, v4);

console.log(`Valor: ${v1}    - Tipo : ${typeof (v1)}.`)
console.log(`Valor: ${v2}    - Tipo : ${typeof (v2)}.`)
console.log(`Valor: ${v3}    - Tipo : ${typeof (v3)}.`)
console.log(`Valor: ${v4}    - Tipo : ${typeof (v4)}.`)