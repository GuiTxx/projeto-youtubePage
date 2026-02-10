const barra_pesquisa = document.querySelector(".barra_pesquisa");
const searchButton = document.getElementById("search_button");

function runSearch() {
    if (!barra_pesquisa) return;
    const search = barra_pesquisa.value.trim();
    if (!search) return;
    window.open(
        `https://www.youtube.com/results?search_query=${encodeURIComponent(search)}`,
        "_blank"
    );
}

if (searchButton) {
    searchButton.addEventListener("click", runSearch);
}

if (barra_pesquisa) {
    barra_pesquisa.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            runSearch();
        }
    });
}