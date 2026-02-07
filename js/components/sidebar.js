// PROPRIEDADES ESPECIFICAS DO BUTTON MORE DA EXPLORE
const button_explore = document.getElementById("button_explore");
const ul_explore = document.getElementById("ul_explore");

// PROPRIEDADES ESPECIFICAS DO BUTTON MORE DA YOU
const button_you = document.getElementById("button_you");
const ul_you = document.getElementById("ul_you");

let moreSubs = document.createElement("div");
let moreYou = document.createElement("div");
let moreExplore = document.createElement("div");



// Conteúdeo HTML das funções de mostrar mais na sidebar
moreSubs.innerHTML = `
<li>
    <a href="#">
        <span></span>
        <h3>Trix 3D</h3>
    </a>
</li>
<li>
    <a href="#">
        <span></span>
        <h3>Mingau</h3>
    </a>
</li>
<li>
    <a href="#">
        <span></span>
        <h3>Google</h3>
    </a>
</li>
`;

moreYou.innerHTML = `
<li>
    <a href="#">
        <img src="/assets/icons/geral/clips_Youtube.svg" alt="Ícone meus Clipes">
        <span>Clipes</span>
    </a>
</li>

`;

moreExplore.innerHTML = `
<li>
    <a href="#">
        <img src="/assets/icons/unfilled/live_unfilled.svg" alt="Ícone Ao vivo">
        <span>Ao vivo</span>
    </a>
</li>
<li>
    <a href="#">
        <img src="/assets/icons/unfilled/games_unfilled.svg" alt="Ícone Jogos">
        <span>Jogos</span>
    </a>
</li>
<li>
    <a href="#">
        <img src="/assets/icons/unfilled/news_unfilled.svg" alt="Ícone Notícias">
        <span>Notícias</span>
    </a>
</li>
<li>
    <a href="#">
        <img src="/assets/icons/unfilled/sports_unfilled.svg" alt="Ícone Esportes">
        <span>Esportes</span>
    </a>
</li>
<li>
    <a href="#">
        <img src="/assets/icons/unfilled/school_unfilled.svg" alt="Ícone Cursos">
        <span>Cursos</span>
    </a>
</li>
<li>
    <a href="#">
        <img src="/assets/icons/geral/podcast.svg" alt="Ícone Podcast">
        <span>Podcast</span>
    </a>
</li>
`;

// Ações dos Botões "Mostrar Mais" localizados na sideBar
// button_more[0].addEventListener("click", () => {

//     listSide[0].classList.toggle("expanded");

//     if (listSide[0].classList.contains("expanded")) {
//         listSide[0].appendChild(moreSubs);
//         const imgElement = button_more[0].querySelector("img");

//         if (imgElement) {
//             imgElement.src = "./assets/icons/geral/arrow_Up.svg";
//         }
//     }else{
//         listSide[0].removeChild(moreSubs);
//         const imgElement = button_more[0].querySelector("img");

//         if (imgElement) {
//             imgElement.src = "./assets/icons/geral/arrow_Down.svg";
//         }
//     }
// })

export function moreButton_YOU() {
    button_you.addEventListener("click", () => {

        ul_you.classList.toggle("expanded");

        if (ul_you.classList.contains("expanded")) {
            ul_you.appendChild(moreYou);
            const imgElement = button_you.querySelector("img");

            if (imgElement) {
                imgElement.src = "./assets/icons/geral/arrow_Up.svg";
            }
        } else {
            ul_you.removeChild(moreYou);
            const imgElement = button_you.querySelector("img");

            if (imgElement) {
                imgElement.src = "./assets/icons/geral/arrow_Down.svg";
            }
        }
    })
}


button_explore.addEventListener("click", () => {

    ul_explore.classList.toggle("expanded");

    if (ul_explore.classList.contains("expanded")) {
        ul_explore.appendChild(moreExplore);
        const imgElement = button_explore.querySelector("img");

        if (imgElement) {
            imgElement.src = "./assets/icons/geral/arrow_Up.svg";
        }
    } else {
        ul_explore.removeChild(moreExplore);
        const imgElement = button_explore.querySelector("img");

        if (imgElement) {
            imgElement.src = "./assets/icons/geral/arrow_Down.svg";
        }
    }
})