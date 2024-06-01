let numeros = [10, 20, 30, 40];

// For Normal
for (let i = 0; i < numeros.length; i++) {
    //     console.log(num[i])
}

// For IN num   pegando Posição
for (n in numeros) { // para cada indice que temos em numeros
    console.log(n)
}

// For OF       pegando elementos
for (n of numeros) { // para cada elemento que temos em numeros
    console.log(n)
}
