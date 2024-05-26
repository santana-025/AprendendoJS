// Convertendo a função para promise
const loginUserPromise = (email, password) => {
    return new Promise((resolve, reject) => {
        const erro = false
        if (erro) {
            reject(new Error("Erro no Login!"));
        }
        console.log("User Logged");
        resolve({ email });
    });
};
// Convertendo para Promisse 

const getUserVideos = (email) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('getUserVideos');
            resolve(["Video1", "Video2", "Video3"]);
        }, 2000);
    });
};
const getVideosDetails = (video) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('getVideosDetails')
            resolve({ title: 'Video Titulo' })
        }, 2500);
    })
}

// Chamando muito mais pratico
loginUserPromise("johnsdad@gmail.com", "12345678") // fez login que retorna uma promisse
    .then((user) => getUserVideos(user.email))  // com isso podemos usar o .them = então e .catch 
    .then((videos) => getVideosDetails(videos[0])) // essa promessa nos retorna a descrição do video 
    .then((videosdetails) => console.log({ videosdetails })) // Exibindo ela
    .catch((error) => console.log({ error })) // Caso tenha um erro 

// Promises.all recebe uma lista de primise e so retorna depois que tiver resultado de todas

const yt = new Promise((resolve) => {
    setInterval(() => {
        resolve("Post no Youtube !");
    }, 2000);
});

const face = new Promise((resolve) => {
    setInterval(() => {
        resolve("Post no Facebook !");
    }, 5000);
});

// Usando ela de fato

Promise.all([yt, face]).then((result) => {
    console.log({ result });
});