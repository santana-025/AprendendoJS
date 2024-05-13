function parinp(n) {
    if (n % 2 == 0) {
        console.log("Número PAR")
    } else {
        console.log("Numero IMPAR")
    }
}

function soma(n1 = 0, n2 = 0) {
    return n1 + n2
}

let v = function (x) {
    return x * 2
}

function fatorial(n) {
    let fat = 1
    for (let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}
/* 
5! = 5 x 4 x 3 x 2 x 1 ou
5! = 5 x 4!

n! = n x (n-1)!
1! = 1

*/
function fatoriall(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatoriall(n - 1);
    }
}






console.log(fatoriall(5))

console.log(fatorial(5));

console.log(v(5))

let resultado = soma(7);
console.log(resultado)

parinp(266);