
const cursos = ['HTML', 'CSS', 'Javascript', 'PHP', 'React'];
cursos.map((elemento, i) => { //a cada interação o elemento vem pra o map e o indice e na função agente faz qualquer coisa
    console.log(`Curso: ${elemento} na posição: ${i}`)
})

// podemos retornar os elementos ex:
let c = cursos.map((elemento, i) => {
    return `<div>${elemento}</div>`
})
console.log(c);

let el = document.getElementsByTagName("div")
// 1 maneiras com html coletion ja que não é interravel
// Com o operador Spread
el = [...el]
el.map((elemento, i) => {
    //elemento.innerHTML = "Jhonn" podemos mudar o texto de todos
    console.log(elemento.innerHTML); // Return todas os elementos 
})

// 2 maneira 
const val = Array.prototype.map.call(el, ({ innerHTML }) => innerHTML);
console.log(val);


// 3 maneira 
const converterInt = (e) => parseInt(e)
const dobra = (e) => e * 2
let num = ["1", "2", "3", "4", "5"].map(dobra);
console.log(num)