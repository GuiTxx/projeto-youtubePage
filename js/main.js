import "./components/sidebar.js";

// IMPORT FROM SERVICES API
import {
    init_Google,
    init_OAuth_token
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
    setLogoChannel
} from "./DOM/variables.js"

import "./DOM/dom.js"




/*===============================================
            ESTADO GLOBAL DO APP (UI)
==================================================*/
let thumb;
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
    thumb = await data_thumb_MyCha(token);
    setThumbMy(thumb);
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

/* ================================
   OAUTH FLOW
================================ */

init_Google();

init_OAuth_token((token) => {
    initApp(token);
});

/*=========================================================================
PROCESSO DE INTERAÇÃO COM A DOM E RENDERIZAÇÃO DE COMPONENTES NA TELA
===========================================================================*/



