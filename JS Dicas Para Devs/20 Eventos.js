/* const btn = document.querySelector("#mandar"); // Pegamos o botão
btn.addEventListener("click", function (e) { // adicionamos o evento quando click chama a função
    e.preventDefault(); // Deixa o evento default sem configs de submit
    console.log(e) // Todas os metodos do eventos
    console.log("Oi");
})
Tirar o modo defalt do btn, passa o proprio evento na função */

// Pegando os inputs
const btn = document.querySelector("#mandar");
const inptnome = document.querySelector("#nome");
const inptemail = document.querySelector("#email");
const meuformulario = document.querySelector("#formulario")
const itens = document.querySelector(".kill")

btn.addEventListener("click", function (e) {
    e.preventDefault();
    // Pegando os valores
    let valornome = inptnome.value;       // .Value so funciona para queryselector
    let valoremail = inptemail.value;
    console.log(valornome, valoremail);
    if (valornome === "" || valoremail === "") {
        return alert("Preencha todos os campos do Formulario") // Return para sair da função
    }
    meuformulario.style.background = "Red"  // Mudando a cor do form
    itens.firstElementChild.innerHTML = `Nome: ${valornome}`
    itens.children[1].innerHTML = ` Email: ${valoremail}`

})

inptnome.addEventListener("change", function (e) {  // Passando o imput para receber o evento change que é mudança
    //console.log(e.target.value)         // todas as vezes que mudar o conteudo ele vai da um console.log da mudança
})
