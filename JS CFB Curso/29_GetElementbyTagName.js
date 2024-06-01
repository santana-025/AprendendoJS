const dc1 = document.getElementById("c1");
const dc2 = document.getElementById("c2");
const dc3 = document.getElementById("c3");
const dc4 = document.getElementById("c4");
const dc5 = document.getElementById("c5");
const dc6 = document.getElementById("c6");

// Criando manualmente uma lista Array
const arrayElementos = [dc1, dc2, dc3, dc4, dc5, dc6];   // Dessa Forma sempre me retorna array
console.log(arrayElementos)

// Forma de adicionar uma lista de coleção html de alguma tag 
const coleçãoHTML = document.getElementsByTagName('div');

// Transformando coleção em array com o spread
const coleçãoHTML_mod = [...document.getElementsByTagName('div')];

console.log(coleçãoHTML_mod); // return array