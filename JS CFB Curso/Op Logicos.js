// &&
// ||
// !
// Resultado de operação logica é sempre verdadeiro ou falso

let n1, n2, n3;
n1 = 2
n2 = 3
n3 = 5

// &&  => and, e 
// Para ser true na operação, as duas operação tem que ser verdade
console.log(n1 > n2 || n3 > n2);
//console.log(true && true);


// || => or, ou
// Para ser true 1 das duas tem que ser verdade
console.log(n1 > n2 || n3 > n2);

//console.log(false || true);  ou
//console.log(true || false);


// ! => not, não
// basicamente nega o resultado, inverte o resultado
console.log(!(n1 > n2 && n3 > n2));
// Resultado da falso mas como estamo com o not se torna true

//console.log(false || true); 
