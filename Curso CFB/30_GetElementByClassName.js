// com o ClassName agente consegue pegar pelas classes
const cursostodos = document.getElementsByClassName("Curso"); // Return htmlcoletion com todas divs
// Podemos transformar em Array com o operador spread
const cursosc1 = [...document.getElementsByClassName("Curso c1")]; // Return htmlcoletion com todas divs
const cursosc2 = [...document.getElementsByClassName("Curso c2")]; // Return htmlcoletion com todas divs
console.log(cursostodos, cursosc1, cursosc2);