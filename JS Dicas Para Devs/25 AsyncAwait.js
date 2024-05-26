const axios = require('axios')
const loginUserPromise = (email, password) => {
    return new Promise((resolve, reject) => {
        const erro = false;
        if (erro) {
            reject(new Error("Erro no Login!"));
        }
        console.log("User Logged");
        resolve({ email });
    });
};

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

// Escrever promise é sempre da mesma forma, normalmente agente consumimos promises
// com o uso de bibliotecas como Axios que retorna uma promisse pra agente 
// EX: axios.get('url').then()
// Consumir promise com Async Await mesmo que o .then e .catch

const displayUser = async () => {
    try {

        const user = await loginUserPromise('jhondev@gmail.com', '12345678') // Aqui basicamente ele vai colocar o resolve dentro desta variavel users
        const videos = await getUserVideos(user.email)
        const videosdetails = await getVideosDetails(videos[0]);
        console.log({ videosdetails });

    } catch (erro) {
        console.log({ erro });
    }
}

displayUser();
axios.get('https://api.adviceslip.com/advice').then((response) => {
    console.log({ response })
})