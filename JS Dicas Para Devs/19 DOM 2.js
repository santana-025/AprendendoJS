const coisas = document.querySelector('.kill'); // Pegando a ol da lista com todos os itens
/*coisas.remove(); // Remove o item que pegamos */

//firstElementChild = Seleciona o primeiro filho
//coisas.firstElementChild.remove();

//lastElementChild = Seleciona o ultimo filho
//coisas.lastElementChild.remove();

// Alterar texto = children[1] pega pelo indice mais não com os metodos de arrays
coisas.children[1].textContent = "Item Com Texmo Modificado"

// Alterar stylos do elemento 
const btn = document.querySelector("#mandar")
btn.style.color = "Red"

