import "./components/sidebar.js";
import "./components/hamburguer.js"
import "./components/videoCard.js"
import "./components/search.js"

// IMPORT FROM SERVICES API
import {
    init_Google,
    init_OAuth_token,
    getStoredToken
} from "./services/oauth.js";
import {
    data_iconsLIKED_videos,
    data_thumb_MyCha,
    data_subs,
    data_likedVideos
} from "./services/datas_API.js";

// IMPORT FROM DOM DIRECTORY
import {
    setThumbMy,
    setSubsThumb,
    setVideosPlay,
    setLogoChannel,
    setIDChannel
} from "./DOM/variables.js"

import "./DOM/dom.js"




/*===============================================
            ESTADO GLOBAL DO APP (UI)
==================================================*/
let thumb_Url;
let id_Channel;
let subs = [];
let videos = [];
let logos = [];

// BOOTSTRAP DO APP

function initApp(token) {
    loadMyChannel(token);
    loadSubs(token);
    loadLikedVideos(token);
}

// LOADERS

async function loadMyChannel(token) {
    ({ thumb_Url, id_Channel } = await data_thumb_MyCha(token));
    setThumbMy(thumb_Url);
    setIDChannel(id_Channel);
}

async function loadSubs(token) {
    subs = await data_subs(token);
    setSubsThumb(subs);
}

async function loadLikedVideos(token) {
    // APLICAÇÕES NA API DOS VÍDEOS GOSTADOS
    videos = await data_likedVideos(token);
    logos = await data_iconsLIKED_videos(token);

    setVideosPlay(videos);
    setLogoChannel(logos);
}
function checkTokenValidity() {
    const token = getStoredToken();
    if(token){
        console.log("Usuário já autenticado, token válido!");
        initApp(token);
    } else {
        console.log("Token ausente ou expirado, solicitando autenticação...");
    }
}
/* ================================
   OAUTH FLOW
================================ */
checkTokenValidity();

init_Google();

init_OAuth_token((token) => {
    initApp(token);
});



