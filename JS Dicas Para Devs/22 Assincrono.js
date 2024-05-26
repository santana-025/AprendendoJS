// Cod Assincrono leva um tempo para ser execultado
// Pode ou não ser bem sussedido
// 3 maneiras : Callbacks, Promises, Promises com Async/Await

// Callbacks

const loginUsers = (email, password) => {
    setTimeout(() => {      // depois de tantos segundo execulta isso 
        console.log("User Logged! ")
        return { email: email } // Melhorar as sintaxe com o ECS6 { email }
    }, 1500);
    console.log("Antes do Setimeout")
};

const user = loginUsers("jhondev@gmail.com", "12345678");

console.log(user) // 

// Resumindo o js não espera o settimeout ser resolvido para passar
// depois continuar o codigo ele faz o contrario passa pra outras coisas
// ate a requisição ficar pronta

