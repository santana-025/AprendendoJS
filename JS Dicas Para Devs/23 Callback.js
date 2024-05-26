// Resolvendo com CALLBACKS

const loginUsers = (email, password, onSuccess, onError) => { // adiciona mais 2 parametro onSuccess e onError
    setTimeout(() => {
        const erro = false;  // Textando deixando com erro
        if (erro) {
            return onError(new Error(" Erro in Login !"))
        }
        console.log("User Logged! ")
        onSuccess({ email: email }); //No lugar do return passa o metodo onSuccess() 
    }, 1500);
    console.log("Antes do Setimeout")
};              // Exemplo de pegar videos 
const getUserVideos = (email, callback) => { // Função com dois parametros
    setTimeout(() => {
        callback(["Video1", "Video2", "Video3"]) // Return isso pra esse calback
    }, 2000)
}
const getVideosDetails = (video, callback) => {
    setTimeout(() => {
        callback({ title: 'Video Titulo' })
    }, 2500);
}

const user = loginUsers("jhondev@gmail.com", "12345678", (user) => {
    getUserVideos(user.email, (videos) => {
        console.log(videos);
        getVideosDetails(videos[0], (videosDetails) => {
            console.log({ videosDetails })
        })
    }) // Primeira função execulta se tiver correto

}, (erro) => {  // Essa segunda função so execulta se tiver erro
    console.log(erro)
})   // na hora de chamar a função passa uma arrow function
// que so acontece depois que a função de cima for execultada

