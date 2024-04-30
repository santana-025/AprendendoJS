let meuobjeto = { nome: "jorge", idade: 23, ano: 1998 };
//alert(meuobjeto.idade);
let carro2 = { marca: "gol", modelo: "1.0", ano: 2020 };
//alert(carro.modelo);

let carro = {
    buzina: function () { alert("buzinando") },
    ligar: function () { alert("Ligando") },
    andar: function () { alert("andando") }
}

alert(carro.buzina());
alert(carro.ligar());
alert(carro.andar());