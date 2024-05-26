// Pegando os Inputs
const nomeInput = document.querySelector("#nome");
const emailInput = document.querySelector("#email");
const botaoSubmit = document.querySelector("#mandar")
const erromsg = document.querySelector(".msg");
const itens = document.querySelector(".kill")
// Adicionando o evento do click no submit
botaoSubmit.addEventListener("click", (evento) => {
    const nome = nomeInput.value;       // Pegando valor de nome
    const email = emailInput.value      // Pegando o valor de email
    if (nome === "" || email === "") {  // Validando se está vazio
        erromsg.textContent = " Preencha todos os Campos do Formulario." // Aciona msg na div que esta vazia
        erromsg.classList = "Erro"; // adiciona a classe que ja existe no html

        setTimeout(() => {      // setTimeout(arrowfunction + tempo ) = depois de tanto tem faz isso 
            erromsg.textContent = ""; // Apaga todo o texto da div erro
            erromsg.classList = "";   // Remove sua classe
        }, 3000)    // fecha o bloco de codigo e passa o proximo parametro que é a quantidade de tempo
        return  // dai sai dessa função pra não execultar o codigos abaixos
    }

    const li = document.createElement("li");   //Criando um novo li
    li.classList = "itens";                    //Adicionando a uma classe
    li.innerHTML = `Nome: ${nome}, <br> Email: ${email}` // Adicionando o seu conteudo
    itens.appendChild(li)   //Adicionando pra ele ser filho da ul já criada

    nomeInput.value = " ";  // Removendo os valores do inputnome 
    emailInput.value = " "; // Removendo os valores do inputemail
})                          // Inner nem textcontent funciona, pois precisa apagar o que esta no elemento pai e não no filho