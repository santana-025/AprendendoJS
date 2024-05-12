function apertou() {
    let data = new Date();
    let ano = data.getFullYear();
    let form_ano = document.getElementById("IDA");
    let res = document.querySelector("div#resu")
    let sexo = document.querySelector()
    if (form_ano.Value.length == 0 || form_ano > ano) {
        window.alert("ERRO. Verifique os Dados e Tente Novamente!")
    } else {
        alert("Tudo Certo!")
    }

}
