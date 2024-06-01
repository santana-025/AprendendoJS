// função sem nome, porem é declarada e criada no momento da exec
const anonima = function (v1, v2) {
    return v1 + v2;
}

console.log(anonima(10, 5));

// Função construtora anonima
const anonimaconstrutora = new Function("v1", "v2", "v3", "return v1+v2+v3") // Dentro das aspas
console.log(anonimaconstrutora(2, 3, 4))