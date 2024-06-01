// html => Raiz ou Root
//  Filho1 ->  Head
//             Filho do Head ->  title            
//  Filho2 ->  Body       
//             Filho do Body ->  div  

const dc1 = document.getElementById("c1");  // Pegar qualquer elemento pelo id
console.log(dc1)            // div completa
console.log(dc1.id)         // ID da div
console.log(dc1.innerHTML)  // Conteudo da div
dc1.innerHTML = "Jhonn"     // Muda o valor do conteudo

const dc2 = document.getElementById("c2");
const dc3 = document.getElementById("c3");
const dc4 = document.getElementById("c4");
const dc5 = document.getElementById("c5");
const dc6 = document.getElementById("c6");

// Formas de manipular as Divs

// Usando o For 
const arrayElementos = [dc1, dc2, dc3, dc4, dc5, dc6];
for (d of arrayElementos) {
    //d.innerHTML = "Mudei Tudo"
}
// Usando o MAP
arrayElementos.map((e) => {
    e.innerHTML = "Mudei Tudo"
})