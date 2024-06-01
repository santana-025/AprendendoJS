function aluno(nome, nota) {
    this.nome = nome;    //Para diferenciar usa o This.nome = variavel que recebe o nome do parametro
    this.nota = nota;

    //this.dados_anonimo = function () {  // Com a nova instancia não tem o nome e o nota pois passa 
    //   setTimeout(function () {        // Pra um novo bloco de notas
    //      this.nome = nome;   // Resolvendo reatribuindo
    //      this.nota = nota; 
    //      console.log(this.nome, this.nota)
    //   }, 2000)
    //}
    // Porem podemos resolver com ArrowFunction

    this.dados_arrow = function () {    // com arrow
        setTimeout(() => {
            console.log(this.nome)
            console.log(this.nota)
        }, 2000);
    }

}

const aluno1 = new aluno("Jhon", 100)   // tratado como obj
aluno1.dados_arrow();   // Chamando a função interna