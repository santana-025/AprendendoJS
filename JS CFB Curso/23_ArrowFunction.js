const soma = function (v1, v2) { return v1 + v2 };  // podemos tirar a palavra return se for 1 linha

//Com ArrowFunction
const somaa = (v1, v2) => { return v1 + v2 };       // podemos tirar a palavra return se for 1 linha
console.log(somaa(5, 5));

// somente com 1 parametro não precisa de Parenteses
const str = strg => { return strg };
console.log(str("Jhon"));

// Sem a palavra chave return
const add = n => n + 2;
console.log(add(10));