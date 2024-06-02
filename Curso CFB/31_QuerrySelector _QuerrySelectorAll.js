// com o ClassName agente consegue pegar pelas classes
const cursostodos = [...document.getElementsByClassName("Curso")]; // Return htmlcoletion com todas divs com a classe especificada
const todososcurso = [...document.getElementsByTagName('div')];    // Retorna todas as div independente da classe

const querrydiv = document.querySelector("div");
// Ele retorna a primeira div que achar 
const querrydivall = document.querySelectorAll("div");
// Retorna um node list com todas as divs que achar

const querrycursosall = document.querySelectorAll(".Curso");
// Pega todos as divs com a classe Curso (. para classe e # para id ) 

console.log(querrycursosall);
//node list = usada nos navegadores que não tem suporte para o html coletion

const elementos_diferentes = document.querySelectorAll("div,p")
// Podemos pegar elementos diferentes div e p ("div,p") ou ("div,p, #id, .classe"), basta separar por virgula

// todas que tem o atributos class ("div[class]")

// para pegar todos os elementos div com tag p nela ("div > p")
