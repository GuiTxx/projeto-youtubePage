import { appData } from "./variables.js";

function esperarDados() {
    return new Promise(resolve => {
        const interval = setInterval(() => {
            if (
                appData.thumb_my != null &&
                appData.subsThumb.length > 0 &&
                appData.videosPlay.length > 0 &&
                appData.logo_channel.length > 0
            ) {
                clearInterval(interval);
                resolve({
                    thumb_my: appData.thumb_my,
                    subsThumb: appData.subsThumb,
                    videosPlay: appData.videosPlay,
                    logo_channel: appData.logo_channel
                });

            }
        }, 100);
    });
}

async function pegaDados() {
    const result = await esperarDados();
    console.log("Dados chegaram", result)
    DOM_change(result);
}

pegaDados();

// function DOM_change(result){}






function create_Button(result) {
    // ÁREA DE LOGIN QUE TEM BOTÃO GOOGLE E TRES PONTOS
    const login_Area = document.querySelector(".loginAccount");

    // CRIAR O BOTÃO DE CRIAR E PERFIL DO USUÁRIO
    const criar_Button = document.createElement("div");
    const userProfileButton = criar_Button.querySelector(".userProfile button");

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
    userProfileButton.style.backgroundImage = `url(${result.thumb_my})`;

    login_Area.innerHTML = criar_Button.innerHTML;
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
    Object.entries(result.subsThumb).forEach(canal_data => {
        const item = document.createElement("li");

        item.innerHTML = `
        <a href="${canal_data.custom_url}">
            <span></span>
            <h3>${canal_data.nome}</h3>
        </a>
        `
        //ACESSAR O ELEMENTO SPAN PARA APLICAR O BACKGROUND DE CADA CANAL
        const span = item.querySelector("span");
        span.style.backgroundImage = `url(${canal_data.logo})`;

        list.appendChild(item);
    })

    // RENDERIZAR O BOTÃO DE VER MAIS INSCRIÇÕES
    more_subs.innerHTML = `
    <button class="more_views">
        <img src="/assets/icons/geral/arrow_Down.svg" alt="Ícone de seta para baixo">
        <h2>Mostrar mais</h2>
    </button>
    `
    nav_subs.appendChild(more_subs)
}








