const idades = [2, 8, 23, 65, 98, 41, 21];
// So pegar as idades pares 
// Filter ele Cria uma nova lista com um filtro que passarmos 

const idd = idades.filter(function (item) {
    return item % 2 === 0
})
console.log(idd)