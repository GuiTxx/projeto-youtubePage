const button_more = document.getElementsByClassName("more_views");
const listSide = document.getElementsByClassName("list_sidebar");

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

button_more[0].addEventListener("click", () => {

    listSide[0].classList.toggle("expanded");

    if (listSide[0].classList.contains("expanded")) {
        listSide[0].appendChild(moreYou);
        const imgElement = button_more[0].querySelector("img");

        if (imgElement) {
            imgElement.src = "./assets/icons/geral/arrow_Up.svg";
        }
    }else{
        listSide[0].removeChild(moreYou);
        const imgElement = button_more[0].querySelector("img");
        
        if (imgElement) {
            imgElement.src = "./assets/icons/geral/arrow_Down.svg";
        }
    }
})

button_more[1].addEventListener("click", () => {

    listSide[1].classList.toggle("expanded");

    if (listSide[1].classList.contains("expanded")) {
        listSide[1].appendChild(moreExplore);
        const imgElement = button_more[1].querySelector("img");

        if (imgElement) {
            imgElement.src = "./assets/icons/geral/arrow_Up.svg";
        }
    }else{
        listSide[1].removeChild(moreExplore);
        const imgElement = button_more[1].querySelector("img");
        
        if (imgElement) {
            imgElement.src = "./assets/icons/geral/arrow_Down.svg";
        }
    }
})