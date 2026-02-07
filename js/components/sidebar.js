// PROPRIEDADES ESPECIFICAS DO BUTTON MORE DA EXPLORE
const getExploreElements = () => ({
    button_explore: document.getElementById("button_explore"),
    ul_explore: document.getElementById("ul_explore")
});

let moreYou = document.createElement("div");
let moreExplore = document.createElement("div");



// Conteúdeo HTML das funções de mostrar mais na sidebar
moreYou.innerHTML = `
<li>
    <a href="https://www.youtube.com/feed/clips">
        <img src="/assets/icons/geral/clips_Youtube.svg" alt="Ícone meus Clipes">
        <span>Clipes</span>
    </a>
</li>

`;

moreExplore.innerHTML = `
<li>
    <a href="https://www.youtube.com/channel/UC4R8DWoMoI7CAwX8_LjQHig">
        <img src="/assets/icons/unfilled/live_unfilled.svg" alt="Ícone Ao vivo">
        <span>Ao vivo</span>
    </a>
</li>
<li>
    <a href="https://www.youtube.com/gaming">
        <img src="/assets/icons/unfilled/games_unfilled.svg" alt="Ícone Jogos">
        <span>Jogos</span>
    </a>
</li>
<li>
    <a href="https://www.youtube.com/channel/UCYfdidRxbB8Qhf0Nx7ioOYw">
        <img src="/assets/icons/unfilled/news_unfilled.svg" alt="Ícone Notícias">
        <span>Notícias</span>
    </a>
</li>
<li>
    <a href="https://www.youtube.com/channel/UCEgdi0XIXXZ-qJOFPf4JSKw">
        <img src="/assets/icons/unfilled/sports_unfilled.svg" alt="Ícone Esportes">
        <span>Esportes</span>
    </a>
</li>
<li>
    <a href="https://www.youtube.com/feed/courses_destination">
        <img src="/assets/icons/unfilled/school_unfilled.svg" alt="Ícone Cursos">
        <span>Cursos</span>
    </a>
</li>
<li>
    <a href="https://www.youtube.com/podcasts">
        <img src="/assets/icons/geral/podcast.svg" alt="Ícone Podcast">
        <span>Podcast</span>
    </a>
</li>
`;

// Ações dos Botões "Mostrar Mais" localizados na sideBar


export function moreButton_SUBS() {
    const button_subs = document.getElementById("button_subs");
    const ul_subs = document.getElementById("lista_Inscritos");
    const subscription_nav = document.querySelector(".subs_Nav");

    if (!button_subs || !ul_subs || !subscription_nav) {
        return;
    }

    button_subs.addEventListener("click", () => {
        ul_subs.classList.toggle("expanded");

        if (ul_subs.classList.contains("expanded")) {
            // quero retirar o style max-height para mostrar a lista completa de inscritos
            subscription_nav.style.maxHeight = 'none';
            const imgElement = button_subs.querySelector("img");
            const h2Element = button_subs.querySelector("h2");

            if (imgElement) {
                imgElement.src = "./assets/icons/geral/arrow_Up.svg";
            }
            if (h2Element) {
                h2Element.textContent = "Mostrar menos";
            }
        } else {
            const maxHeight = window.getComputedStyle(subscription_nav).maxHeight;
            if (maxHeight === 'none') {
                subscription_nav.style.maxHeight = '360px';
            }
            const imgElement = button_subs.querySelector("img");

            if (imgElement) {
                imgElement.src = "./assets/icons/geral/arrow_Down.svg";
            }
            const h2Element = button_subs.querySelector("h2");
            if (h2Element) {
                h2Element.textContent = "Mostrar mais";
            }
        }
    });
}

export function moreButton_YOU() {
    const button_you = document.getElementById("button_you");
    const ul_you = document.getElementById("ul_you");

    if (!button_you || !ul_you) {
        return;
    }

    button_you.addEventListener("click", () => {
        ul_you.classList.toggle("expanded");

        if (ul_you.classList.contains("expanded")) {
            ul_you.appendChild(moreYou);
            const imgElement = button_you.querySelector("img");
            const h2Element = button_you.querySelector("h2");

            if (h2Element) {
                h2Element.textContent = "Mostrar menos";
            }

            if (imgElement) {
                imgElement.src = "./assets/icons/geral/arrow_Up.svg";
            }
        } else {
            if (ul_you.contains(moreYou)) {
                ul_you.removeChild(moreYou);
            }
            const imgElement = button_you.querySelector("img");
            const h2Element = button_you.querySelector("h2");

            if (h2Element) {
                h2Element.textContent = "Mostrar mais";
            }

            if (imgElement) {
                imgElement.src = "./assets/icons/geral/arrow_Down.svg";
            }
        }
    });
}

const { button_explore, ul_explore } = getExploreElements();
if (button_explore && ul_explore) {
    button_explore.addEventListener("click", () => {
        ul_explore.classList.toggle("expanded");

        if (ul_explore.classList.contains("expanded")) {
            ul_explore.appendChild(moreExplore);
            const imgElement = button_explore.querySelector("img");
            const h2Element = button_explore.querySelector("h2");

            if (h2Element) {
                h2Element.textContent = "Mostrar menos";
            }

            if (imgElement) {
                imgElement.src = "./assets/icons/geral/arrow_Up.svg";
            }
        } else {
            if (ul_explore.contains(moreExplore)) {
                ul_explore.removeChild(moreExplore);
            }
            const imgElement = button_explore.querySelector("img");
            const h2Element = button_explore.querySelector("h2");

            if (h2Element) {
                h2Element.textContent = "Mostrar mais";
            }

            if (imgElement) {
                imgElement.src = "./assets/icons/geral/arrow_Down.svg";
            }
        }
    });
}