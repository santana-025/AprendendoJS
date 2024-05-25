const idades = [12, 1, 55, 46, 31];
// Reduz todos os itens para apenas 1
// Reduce cria uma função para fazer algo para juntar tudo em 1 unico dado
// Recebe 2 parametros o item do array e o acumulador onde vai tudo se unir nele 

const SomasIdades = idades.reduce(function (item, acumulador) {
    return acumulador + item;
}, 0)
console.log(SomasIdades)