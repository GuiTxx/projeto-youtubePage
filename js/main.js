import "./components/sidebar.js";

import {
    init_Google,
    init_OAuth_token
} from "./services/oauth.js";

import {
    thumb_MyCha,
    subsInfo,
    likedVideos,
    getIcon_likedVideos
} from "./services/datas_API.js";

/*===============================================
            ESTADO GLOBAL DO APP (UI)
==================================================*/
let thumb_my;
let subsThumb = new Object();
let videosPlay = [];
let logo_channel = [];

// BOOTSTRAP DO APP

function initApp(token) {
    loadMyChannel(token);
    loadSubs(token);
    loadLikedVideos(token);
}

// LOADERS

async function loadMyChannel(token) {
    thumb_my = await thumb_MyCha(token);
    console.log("Minha thumb:", thumb_my);
}

async function loadSubs(token) {
    subsThumb = await subsInfo(token);
    console.log("Inscrições:", subsThumb);
}

async function loadLikedVideos(token) {
    videosPlay = await likedVideos(token);
    logo_channel = await getIcon_likedVideos(token);

    console.log("Vídeos:", videosPlay);
    console.log("Logos:", logo_channel);
}

/* ================================
   OAUTH FLOW
================================ */

init_Google();

init_OAuth_token((token) => {
    initApp(token);
});



