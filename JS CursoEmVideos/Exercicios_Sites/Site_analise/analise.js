let lista = []; //ARRAY FORA DO SCOPE PARA NÂO RESETAR TODAS AS VEZES QUE USAR A FUNÇÂO 

function addoption(num) {
    let select = document.getElementById("select");
    let option = document.createElement('option');
    option.text += ` o Número ${num} foi Adicionado.`
    select.appendChild(option);
}
function Add() {
    let numero = document.getElementById("numero");
    let num = Number(numero.value);
    let select = document.getElementById("select");
    if (num <= 0 || num > 100) {
        alert("ERRO, Número Inválido")
    } else if (lista.includes(num)) {
        alert("Erro, Numero REPETIDO")
    } else {
        lista.push(num);
        addoption(num);
        numero.innerText = ""
    }
}
function maiorvalor(l) {
    l.sort()
    l.reverse()
    return l[0]
}
function menorvalor(l) {
    l.sort();
    return l[0]
}
function soma(l, qtd) {
    let s = 0
    for (let x = 0; x < qtd; x++) {
        s += l[x];
    } return s
}
function media(s, q) {
    return s / q
}
function calcular() {
    if (numero.value.length == 0) {
        alert("Erro Impossivel analizar sem números.")
    } else {
        let resposta = document.querySelector("div#res");
        let quantidade = lista.length
        let maxvalor = maiorvalor(lista);
        let mimvalor = menorvalor(lista);
        let somatorio = soma(lista, quantidade);
        let med = media(somatorio, quantidade)
        resposta.innerHTML = `
        A Quantidade de itens adicionado foi : ${quantidade} <br>
        O Maio Valor Cadastrado foi : ${maxvalor} <br>
        O Menor Valor Cadastrado foi : ${mimvalor} <br>
        A Soma de Todos os Valores foi : ${somatorio} <br>
        A Media dos Valores foi : ${med} <br>
        `
        numero.value = " "
        numero.focus();
    }


}