import { appData } from "./variables.js";
import { moreButton_YOU, moreButton_SUBS } from "../components/sidebar.js";

export function esperarDados() {
    return new Promise(resolve => {
        const interval = setInterval(() => {
            if (
                appData.thumb_my != null &&
                appData.id_channel != null &&
                appData.subsThumb.length > 0 &&
                appData.videosPlay.length > 0 &&
                appData.logo_channel.length > 0
            ) {
                clearInterval(interval);
                resolve({
                    thumb_my: appData.thumb_my,
                    id_channel: appData.id_channel,
                    subsThumb: appData.subsThumb,
                    videosPlay: appData.videosPlay,
                    logo_channel: appData.logo_channel
                });

            }
        }, 100);
    });
}

export async function pegaDados() {
    const result = await esperarDados();
    console.log("Dados chegaram", result)
    DOM_change(result);
}

// FUNÇÕES DE MUDANÇA NO DOM APÓS O LOGIN

function create_Button(result) {
    // ÁREA DE LOGIN QUE TEM BOTÃO GOOGLE E TRES PONTOS
    const login_Area = document.querySelector(".loginAccount");
    if (!login_Area) {
        return;
    }

    // CRIAR O BOTÃO DE CRIAR E PERFIL DO USUÁRIO
    const criar_Button = document.createElement("div");
    login_Area.innerHTML = ""

    // LOAD DO BOTÃO DE CRIAR E PERFIL
    criar_Button.innerHTML = `
    <div class="criarButton"> 
        <div class="userActions"> 
            <button id="internoButton"> 
                <img src="/assets/icons/geral/add_Icon.svg" alt="Criar vídeo"> 
                <h3>Criar</h3> 
            </button> 
            <button id="notifyButton"> 
                <img src="/assets/icons/unfilled/notification_unfillled.svg" alt="Botão de Notificações"> 
            </button> 
        </div> 
        <div class="userProfile"> 
            <button> </button> 
        </div>
    </div>
    `
    login_Area.replaceChildren(criar_Button);

    const userProfileButton = login_Area.querySelector(".userProfile button");
    if (userProfileButton) {
        userProfileButton.style.backgroundImage = `url(${result.thumb_my})`;
    }
}

function you_section(){
    // SUBS NAV
    const subs_nav = document.querySelector(".subs_Nav");
    // PEGAR AS LI'S DA MAIN NAV
    const li_mainNAV = Array.from(document.querySelectorAll(".main_Navegation li"));
    // PAI DA YOU
    const container_YOU = document.querySelector('.user_YOU');
    // CRIANDO OS ELEMENTOS DA SEÇÃO VOCÊ
    const hr = Array.from(document.querySelectorAll('.division'));
    const title_YOU = document.createElement("div");
    const ul_YOU = document.createElement('ul');
    const more_YOU = document.createElement('div');

    // EXCLUINDO AS LI'S DA MAIN NAV (INCRIÇÕES, VOCÊ, HISTÓRICO)
    li_mainNAV[2].remove();
    li_mainNAV[3].remove();
    li_mainNAV[4].remove();

    // SETANDO ATRIBUTOS DOS ELEMENTOS
    title_YOU.classList.add("user_data");
    ul_YOU.setAttribute("id","ul_you");
    more_YOU.classList.add("moreInfo");

    // ADICIONANDO O HTML A CADA ATRIBUTO
    title_YOU.innerHTML = `
    <a href="#">
        <h2>Você</h2>
        <img src="/assets/icons/geral/arrow_Right.svg" alt="Ícone de seta para direita">
    </a>
    `
    ul_YOU.innerHTML = `
    <li>
        <a href="https://www.youtube.com/feed/history">
            <img src="/assets/icons/geral/historico_Search.svg" alt="Ícone Histórico">
            <span>Histórico</span>
        </a>
    </li>
    <li>
        <a href="https://www.youtube.com/feed/playlists">
            <img src="/assets/icons/geral/playlist.svg" alt="Ícone playlist">
            <span>Playlist</span>
        </a>
    </li>
    <li>
        <a href="https://www.youtube.com/playlist?list=WL">
            <img src="/assets/icons/unfilled/watchLater_Unfilled.svg" alt="Ícone assistir mais tarde">
            <span>Assistir mais tarde</span>
        </a>
    </li>
    <li>
        <a href="https://www.youtube.com/playlist?list=LL">
            <img src="/assets/icons/unfilled/Liked_videoUnfilled.svg" alt="Ícone vídeos curtidos">
            <span>Vídeos com "Gostei"</span>
        </a>
    </li>
    <li>
        <a href="#">
            <img src="/assets/icons/unfilled/myVideos_unfilled.svg" alt="Ícone meus Vídeos">
            <span>Seus vídeos</span>
        </a>
    </li>
    `
    more_YOU.innerHTML = `
    <button id="button_you">
        <img src="/assets/icons/geral/arrow_Down.svg" alt="Ícone de seta para baixo">
        <h2>Mostrar mais</h2>
    </button>
    `

    hr[1].style.opacity = "1";
    container_YOU.style.padding = "12px";
    subs_nav.style.padding = "12px";

    // ADICIONANDO AO PAI
    container_YOU.appendChild(title_YOU);
    container_YOU.appendChild(ul_YOU);
    container_YOU.appendChild(more_YOU);

    moreButton_YOU();
}

function subs_section(result) {
    // BOTAO INSCRIÇÕES
    const div_SUBSnav = Array.from(document.querySelectorAll(".subs_Nav div"));

    // =================
    const inscricoes_Button = document.createElement("a");
    inscricoes_Button.setAttribute("href", "#");


    // PEGAR ul E MODIFICAR
    const ul_incricoes = document.querySelector(".subs_Nav ul");
    ul_incricoes.classList.add("subs_List", "list_sidebar");
    // adicionar id para a ul e uma classe para estilizar a lista de inscritos
    ul_incricoes.setAttribute("id", "lista_Inscritos");


    // DOM INSCRITOS
    const nav_subs = document.querySelector(".subs_Nav");
    const list = document.getElementById("lista_Inscritos");
    // VER MAIS INSCRITOS
    const more_subs = document.createElement("div");
    more_subs.classList.add("moreInfo");

    // EXCLUIR A DIV BEFORE_LOGIN
    const before_Login = document.querySelector(".subs_Nav .before_Login");
    if (before_Login) {
        before_Login.remove();
    }

    // LOAD DO BOTÃO "INSCRIÇÕES"
    inscricoes_Button.innerHTML = `
    <h2>Inscrições</h2>
    <img src="/assets/icons/geral/arrow_Right.svg" alt="Ícone de seta para direita">
    `
    div_SUBSnav[4].appendChild(inscricoes_Button);
    div_SUBSnav[4].classList.add("subs");

    // RENDERIZAR AS INSCRIÇÕES DO USUÁRIO
    result.subsThumb.forEach((canal_data) => {
        const item = document.createElement("li");
        const channelUrl = canal_data.custom_url || "#";

        item.innerHTML = `
        <a href="${channelUrl}">
            <span></span>
            <h3>${canal_data.nome}</h3>
        </a>
        `
        //ACESSAR O ELEMENTO SPAN PARA APLICAR O BACKGROUND DE CADA CANAL
        const span = item.querySelector("span");
        if (canal_data.logo) {
            span.style.backgroundImage = `url(${canal_data.logo})`;
        }

        list.appendChild(item);
    })

    // RENDERIZAR O BOTÃO DE VER MAIS INSCRIÇÕES
    more_subs.innerHTML = `
    <button id="button_subs">
        <img src="/assets/icons/geral/arrow_Down.svg" alt="Ícone de seta para baixo">
        <h2>Mostrar mais</h2>
    </button>
    `
    nav_subs.appendChild(more_subs)

    nav_subs.style.position = "relative"
    more_subs.style.position = "absolute"
    more_subs.style.bottom = "0"
    list.style.paddingBottom = "28px"
    
    moreButton_SUBS();
    
}

function applyLink_channelID(result) {
    const ytb_studio = document.querySelector(".moreYoutube #studio");
    ytb_studio.setAttribute("href", `https://studio.youtube.com/channel/${result.id_channel}`)
}

function DOM_change(result) {
    create_Button(result);
    you_section();
    subs_section(result);
    applyLink_channelID(result);
}

pegaDados();








