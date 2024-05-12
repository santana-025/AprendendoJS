function carregar() {
    let agora = new Date();
    let hora = agora.getHours();
    let msg = document.getElementById("msg");
    let imagem = document.getElementById("figura")
    msg.innerHTML = (`Agora São ${hora} Horas`);

    if (hora < 12 && hora >= 0) {
        imagem.src = "bd.jpg";
        document.body.style.background = "#BF6734";
        console.log("Bom dia");

    } else if (hora >= 12 && hora <= 18) {
        imagem.src = "bt.jpg";
        document.body.style.background = "#6588A6";
        console.log("Bom Tarde");

    } else {
        imagem.src = "bn.jpg";
        document.body.style.background = "#0B0D08";
        console.log("Bom Noite")
    }
}



