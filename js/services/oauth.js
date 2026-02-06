// FUNÇÕES FETCH PARA A REQUISIÇÃO DE DADOS DA API YOUTUBE V3
import { getChannelIcon, getChannelInfo, getChannelSubs, getLikedvideos } from './youtubeApi.js';







function credentialsUSER_Response(response) {
    const data = jwt_decode(response.credential);
    console.log(data);

    if (data.email_verified) {
        tokenClient.requestAccessToken({ prompt: 'consent' });
    } else {
        alert('Verifique o seu Email e tente novamente!')
    }
}

window.onload = function () {
    google.accounts.id.initialize({
        client_id: '1081628126061-h5pa6ehoer6emk7pq6qm1ctbsnntrsim.apps.googleusercontent.com',
        callback: credentialsUSER_Response
    });

    // Renderiza o botão do Google (funciona em HTTP local)
    google.accounts.id.renderButton(
        document.getElementById('buttonGoogle'),
        {
            theme: 'filled_black',
            size: 'large',
            text: 'signin',
            shape: 'pill',
            type: 'standard',
            logo_alignment: 'left',
            width: "100",
        }
    );
}



// Inicializa o cliente OAuth 2.0, pegando o token de acesso

let tokenClient;

tokenClient = google.accounts.oauth2.initTokenClient({
    client_id: '1081628126061-h5pa6ehoer6emk7pq6qm1ctbsnntrsim.apps.googleusercontent.com',
    scope: 'https://www.googleapis.com/auth/youtube.readonly',
    callback: (response) => {
        if (response.error) {
            console.error('Error fetching access token: ' + response.error);
            return;
        }
        thumb_MyCha(response.access_token);
        subsInfo(response.access_token);
        likedVideos(response.access_token);
        getIcon_likedVideos(response.access_token)
    },
});

let thumb_my;

function thumb_MyCha(token_Access) {
    getChannelInfo(token_Access).then(data => {
        // MINIATURA DO MEU CANAL
        thumb_my = data.items[0].snippet.thumbnails.default.url;
        console.log(thumb_my);
    })
}


let subsThumb = new Object();

function subsInfo(token_Access) {
    getChannelSubs(token_Access).then(data => {
        let arrayItems = data.items;
        arrayItems.forEach(channel => {
            const subsTitle = channel.snippet.title;
            const thumbURLS = channel.snippet.thumbnails.default.url;
            // CRIA OBJETO CHAVE-VALOR COM TITULO-URL 
            subsThumb[subsTitle] = thumbURLS;
        });
        console.log(subsThumb)
    })
}

let videosPlay;

function likedVideos(token_Acess) {
    getLikedvideos(token_Acess).then(data => {
        const videos = data.items.map(element => ({
            url: `https://www.youtube.com/watch?v=${element.id}`,
            duration: element.contentDetails.duration ,
            title_channel: element.snippet.channelTitle ,
            title_video: element.snippet.localized?.title ?? element.snippet.title ,
            publi_date: element.snippet.publishedAt ,
            thumb_video:
                element.snippet.thumbnails?.standard?.url ||
                element.snippet.thumbnails?.high?.url ||
                element.snippet.thumbnails?.medium?.url ||
                element.snippet.thumbnails?.default?.url
        }))

        videosPlay = videos;
        console.log(videosPlay);

    })
}

let logo_channel = [];

async function getIcon_likedVideos(token_Access){
    const likedVideos = await getLikedvideos(token_Access);
    const channelId = likedVideos.items.map(element => element.snippet.channelId)

    channelId.forEach(element => {
        getChannelIcon(token_Access, element).then(data => {
            logo_channel.push(data.items[0].snippet.thumbnails.default.url);
        });
    })

    console.log(logo_channel);
}