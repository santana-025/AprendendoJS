// Ela gera alguma coisa e retorna e o resto é na proxima chamada
function* cores() { // * indica que é Geradora
    yield "Vermelho" // é como se fosse um return.
    yield "Verde"
    yield "Azul"
}

const itc = cores();
console.log(itc.next().value);   //console.log(itc); Return uma função intereitor
console.log(itc.next().value);
console.log(itc.next().value);

// .next().value = proximo valor

// Cada chamada a função roda até achar um
// yield que seria como um retorno e na proxima
// chamada ela continua daquela parte.


// usando o NEXT 
function* perguntas() {
    const nome = yield 'Qual o seu nome ?'
    const esporte = yield 'Qual seu esporte favorito ?'
    return `Seu nome é ${nome}, e Esporte favorito é ${esporte}.`
}

const itp = perguntas()
console.log(itp.next().value)
console.log(itp.next("Jhon").value);
console.log(itp.next("Futebol").value);

function* contador() {
    let i = 0
    while (true) {
        yield i++
        if (i > 5)
            break
    }
}

const itco = contador()
// for (let i = 0; i <= 10; i++) {
//     console.log(itco.next().value)
// }

for (let c of itco) {   // Contador infinito
    console.log(c)      // para para tem um if com um break
}