// PEGA ASIDE -> O PAI
const aside_container = document.querySelector(".sideBar");
// PEGA A SIDEBAR MAIOR
const sideBar_fat = document.querySelector(".sideBar_items");
// CONSTROI A SIDE SLIM
const sideBar_slim = document.createElement("div");
sideBar_slim.classList.add("sideBar_slim");
sideBar_slim.innerHTML = `
<nav class="nav_slim">
    <ul>
        <li>
            <a href="/">
                <img src="/assets/icons/unfilled/home_Unfilled.svg" alt="Ícone Aba Início Youtube">
                <span>Início</span>
            </a>
        </li>
        <li>
            <a href="https://www.youtube.com/shorts/">
                <img src="/assets/icons/geral/shorts_IconYoutube.svg"
                    alt="Ícone Aba Youtube Shorts">
                <span>Shorts</span>
            </a>
        </li>
        <li>
            <a href="#">
                <img src="/assets/icons/geral/subscribe_Icon.svg" alt="Ícone Inscrições" class="subs_slim">
                <span>Inscrições</span>
            </a>
        </li>
        <li>
            <a href="#">
                <img src="/assets/icons/unfilled/login_unfilled.svg" alt="Ícone Aba Youtube Shorts">
                <span>Você</span>
            </a>
        </li>
    </ul>
</nav>
`

// PEGA BOTÃO HAMBURGUER PARA "OUVI-LO"
const hamburguer_button = document.getElementById("hamburguer_Icon");

// APLICO A LÓGICA DE TROCA DE SIDEBAR, COM MEDIA QUERY PARA MUDAR O LAYOUT CONFORME O TAMANHO DA TELA.
const mediaQuery = window.matchMedia("(max-width: 1310px)");

// PEGANDO O HEADER LEFT PARA DAR UM MARGIN LEFT QUANDO A SIDEBAR ESTIVER EXPANDIDA
const header_left = document.querySelector(".left_Menu");

function ensureFatSidebarInDom() {
    if (!aside_container.contains(sideBar_fat)) {
        aside_container.appendChild(sideBar_fat);
    }
}

function ensureSlimSidebarInDom() {
    if (!aside_container.contains(sideBar_slim)) {
        aside_container.appendChild(sideBar_slim);
    }
}

function setSmallLayout() {
    aside_container.classList.add("aside_slim");
    ensureSlimSidebarInDom();
    sideBar_fat.classList.remove("expanded");
    sideBar_fat.style.transform = "translateX(-100%)";
    header_left.style.marginLeft = "0px";
}

function setLargeLayout() {
    sideBar_fat.classList.remove("expanded");
    sideBar_fat.style.transform = "";
    aside_container.classList.remove("aside_slim", "aside_changeMODE");
    aside_container.classList.add("sideBar");
    // ADICIONA MARGIN LEFT AO HEADER QUANDO A SIDEBAR ESTIVER EXPANDIDA
    header_left.style.marginLeft = "10px";
    if (aside_container.contains(sideBar_slim)) {
        aside_container.removeChild(sideBar_slim);
    }
    ensureFatSidebarInDom();
}

function toggleSmallLayout() {
    const isExpanded = sideBar_fat.classList.toggle("expanded");
    if (isExpanded) {
        sideBar_fat.style.transform = "translateX(0)";
        if (aside_container.contains(sideBar_slim)) {
            aside_container.removeChild(sideBar_slim);
        }
        aside_container.classList.remove("aside_slim");
    } else {
        sideBar_fat.style.transform = "translateX(-100%)";
        ensureSlimSidebarInDom();
        aside_container.classList.add("aside_slim");
    }
}

function toggleLargeLayout() {
    aside_container.classList.toggle("aside_changeMODE");

    if (aside_container.classList.contains("aside_changeMODE")) {
        if (aside_container.classList.contains("sideBar")) {
            aside_container.classList.replace("sideBar", "aside_slim");
            aside_container.replaceChildren(sideBar_slim);
        } else {
            console.log("A classe sideBar não voltou ainda ao normal.");
        }
        return;
    }

    if (aside_container.classList.contains("aside_slim")) {
        aside_container.classList.replace("aside_slim", "sideBar");
        aside_container.replaceChildren(sideBar_fat);
    } else {
        console.log("A classe sideBar não voltou ainda ao normal.");
    }
}

function handleScreenChange(e) {
    if (e.matches) {
        setSmallLayout();
    } else {
        setLargeLayout();
    }
}

hamburguer_button.addEventListener("click", () => {
    if (mediaQuery.matches) {
        toggleSmallLayout();
    } else {
        toggleLargeLayout();
    }
});
// INICIALIZA A VERIFICAÇÃO DE TELA
handleScreenChange(mediaQuery);

// ADICIONA O LISTENER PARA MUDANÇA DE TELA
mediaQuery.addEventListener('change', handleScreenChange);





