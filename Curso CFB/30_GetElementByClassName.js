// com o ClassName agente consegue pegar pelas classes
const cursostodos = [...document.getElementsByClassName("Curso")]; // Return htmlcoletion com todas divs
// Podemos transformar em Array com o operador spread
const cursosc1 = [...document.getElementsByClassName("c1")]; // Return htmlcoletion com todas divs
const cursosc2 = [...document.getElementsByClassName("c2")]; // Return htmlcoletion com todas divs
// Podemos pegar individual dessa forma. // Pelo indice
const individual = [...document.getElementsByClassName("Curso")][2];
console.log(individual);


console.log(cursostodos, cursosc1, cursosc2);

// passando uma função no map que pega o elemento e adiciona uma classe nele
cursostodos.map((elemento) => {
    // Adicionamos a classe destaque em cursotodos
    elemento.classList.add("destaque");
})