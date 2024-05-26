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

btn.addEventListener("click", function (e) {
    e.preventDefault();
    // Pegando os valores
    const valornome = inptnome.value;       // .Value so funciona para queryselector
    const valoremail = inptemail.value;
    console.log("Oi");
    console.log(valoremail);
})

