function contar() {
    let start = document.getElementById("txti");
    let passo = document.getElementById("txtp");
    let final = document.getElementById("txtf");
    let resposta = document.getElementById("resposta");
    if (start.value.length == 0 || passo.value.length == 0 || final.value.length == 0) {
        alert("Erro, FALTANDO DADOS...")
    } else {
        resposta.innerHTML = "Contando... <br>"
        let i = Number(start.value);
        let p = Number(passo.value);
        let f = Number(final.value);
        if (p <= 0) {
            alert("Impossivel Contar com passos 0, Considerando o passo = 1 >>");
            p = 1;
        }
        if (i < f) {
            for (let x = i; x <= f; x += p) {
                resposta.innerHTML += `👉 ${x} `
            }
        } else {
            for (let x = i; x >= f; x -= p) {
                resposta.innerHTML += `👉 ${x} `
            }
        }
        resposta.innerHTML += `✋`
    }

}