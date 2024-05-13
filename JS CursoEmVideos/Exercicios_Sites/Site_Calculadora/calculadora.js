function calculando() {
    let num = document.getElementById("txtnumero");
    let sel = document.getElementById("resp");
    let n = Number(num.value)
    if (num.value.length == 0) {
        alert("ERRO, DADOS INVALIDOS")
    } else if (n == 0) {
        alert("Qualquer Número Multiplicado por 0 = 0")
    } else {
        sel.innerHTML = " "
        for (x = 1; x <= 10; x++) {
            let item = document.createElement('option')
            item.text = `${n} X ${x} = ${n * x}`
            sel.appendChild(item);
        }
    }
}