// São Basicamente execulta uma ação criada por nois 
function soma(numero1, numero2) {
    console.log(numero1 + numero2)
}
// Nesse caso ela execulta o codigo 
soma(5, 2);

// agora se ela retorna o resultado ex:
function diminuir(numero1, numero2) {
    return numero1 - numero2
}
// nesse caso eu não chamo ela e sim passo uma variavel
// Para receber o valor que ela vai gerar ex:
const resultado = diminuir(7, 3);
console.log(resultado)

// Passando valores Parametros caso não mandem valor na chamada
function dividir(numero1 = 10, numero2 = 2) {   // numero1 = 5
    return numero1 / numero2                    // numero2 = 10
}                                               // defalt
const res = dividir(); // Não passei parametros 
console.log(res)       // Return:  5
const res2 = dividir(20, 2); // Caso passar parametros
console.log(res2); // return: 10  Funcionando normalmente 