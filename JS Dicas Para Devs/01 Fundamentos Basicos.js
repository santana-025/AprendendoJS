// Todos os navegadores só entende JavaScript !
// (React Native) Aplicações Mobiles
// (Electron) Aplicações Desktop

// Variaveis

// podemos declara uma função e depois atribuir o valor a ela
let numeros;        // Declarando a variavel

numeros = 12456;      //  atribuindo valores a ela
// podemos tambem declarar varias de uma unica vez
let nome, idade, carro;
nome = "Jorge"
idade = 22
carro = "Fusca"


// alert() Caixa de alerta     
alert("Hello Word");
var msge = "Hello Word"; // var Global porem incada
//c alert(msg)
let msg = "Hello word let"; // let  Não pode ser reatribuida, mais pode mudar o seu valor 
msg = "Pode ser alterado" // funciona localmente ("Se estiver global, funciona global", "se tiver numa função, so tera ali na função")
alert(msg)
const msgg = "Hello word Const" // Const Não pode ser reatribuida nem mudar o seu valor
alert(msgg)

// Todo texto é uma string

msgg.length   // Quantidade de letras na msg
console.log() // mostra no console
const Primeiro_Nome = "Jhonn"
const Segundo_Nome = "Deev"
// Juntando Strings       + é ultilizado como concatenação junta duas strings
console.log('Meu nome é ' + Primeiro_Nome + Segundo_Nome) // Return : Meu nome é Jhonn Deev
// Usando Template Strings 
console.log(`Meu nome é ${Primeiro_Nome} ${Segundo_Nome}`) // Return : Meu nome é Jhonn Deev

Primeiro_Nome.toUpperCase // Tudo MAIUSCULO
Segundo_Nome.toLowerCase  // Tudo minusculo
const nomes = "João, Jhon, Dev";
console.log(nomes.split(","))  // Cria uma nova lista e separa por ,
console.log(nomes.split(""))  // Sem Parametro ele separa letras Por Letras

//Tipos de DADOS
let Numeros = 7
Numeros.toString() // Converte para string return "7"
console.log(typeof Numeros.toString()) // Mostra o tipo do dados

// Boleanos false e true
console.log(2 == 4); //Falso
console.log(2 == 2); //True
//Null e Undefind
const n = null      // Ele é vazia  
const u = undefined // Não foi definida

console.log(n, u); // Dessa forma conseguimos logar 2 coisas

