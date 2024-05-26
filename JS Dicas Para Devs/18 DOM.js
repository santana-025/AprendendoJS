/*
retorna um html coletion que não reconhece como array e fica muito ruim de manipular

const titulodoform = document.getElementByClasseName("clase dos titulos"); todos os itens da mesma classe 
const titulodoform = document.getElementByName("titulo");   todos os itens com esse nome "titulo"
const titulodoform = document.getElementByTagName("div");   todas as divs */
const titulodoform = document.getElementById("user"); // Pegamos o H1 pelo ID

/* Forma Mais nova QuerySelector so retorna o primeiro elemento
const titulodoform = document.querySelector("# para o id, . para classes");
Alterando os valores no QuerySelector
titulodoform.textContent = "Novo Titulo"; */

// Alterando os valores

titulodoform.innerHTML = "Adicionando Usuarios"     // html você pode colocar tags no meio
// titulodoform.innerText = "Adicionando Usuarios"  // text modifica somente o texto

// Pegando os textos
console.log(titulodoform.textContent);              // Mostrando a msg do h1 no console
// Sem o textContent ele retorna o h1 completo

// Selecionando Multiplos Elementos
const todosositens = document.querySelectorAll(".itens")
console.log(todosositens) //Retorna NodeList(3) [div.itens, div.itens, div.itens] usa os mesmos metodos
