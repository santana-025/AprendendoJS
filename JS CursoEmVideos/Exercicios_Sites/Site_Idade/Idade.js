function apertou() {
    let data = new Date();
    let ano = data.getFullYear();
    let form_ano = document.getElementById("IDA");
    let res = document.querySelector("div#resu")

    if (form_ano.value.length == 0 || Number(form_ano.value) > ano) {
        window.alert("Erro ! Verifique os dados e tente novamente !")
    } else {
        var genero = "";
        var dados = document.getElementsByName('sexo');
        var idade = ano - Number(form_ano.value);
        var img = document.createElement("img");
        img.setAttribute("id", "foto");
        if (dados[0].checked) {
            var genero = "Homem"
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute("src", "criança-m.jpg");
            } else if (idade < 21) {
                // Jovem
                img.setAttribute("src", "joven-m.jpg");
            } else if (idade < 59) {
                //Adulto
                img.setAttribute("src", "adulto-m.jpg");
            } else {
                // Idoso
                img.setAttribute("src", "idoso-m.jpg");
            }
        } else {
            var genero = "Mulher"
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute("src", "criança-f.jpg");
            } else if (idade < 21) {
                // Jovem
                img.setAttribute("src", "joven-f.jpg");
            } else if (idade < 59) {
                //Adulto
                img.setAttribute("src", "adulta.f.jpg");
            } else {
                // Idoso
                img.setAttribute("src", "idosa-f.jpg");
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} Anos.<br>`
        res.appendChild(img);
    }
}