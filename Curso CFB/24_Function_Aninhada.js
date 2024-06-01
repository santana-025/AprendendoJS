const soma = (...valores) => {
    const somar = val => {  // Criamos uma função que soma e
        let res = 0;        // return uma soma
        for (v of val)
            res += v
        return res
    }
    return somar(valores) // return o resultado da função interna somar 
}

console.log(soma(10, 5, 15)); // como é parametros rest agente pode passar quantos parametros quiser;
