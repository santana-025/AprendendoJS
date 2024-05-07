window.alert("Olá") // Execulta o alerta na minha janela principal
document.body.style.background = "white";
function saudacoes() { return alert("Olá jhonn") };
window.saudacoes();
function largura_altura() {
    alert(window.innerHeight);
    alert(window.innerWidth);
};
window.largura_altura();
document.getElementById("titulo").innerText = "Novo Titulo";

alert(location.href);

if (confirm("Deseja ir para o Google")) {
    location.href = "https://www.google.com";
}
