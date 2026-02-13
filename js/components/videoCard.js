import { appData } from "../DOM/variables.js";
import { esperarDados } from "../DOM/dom.js";

esperarDados();

async function pegaDados() {
    const result = await esperarDados();
    videos_Load(result);
}

pegaDados();

// FORMATADORES DE DURAÇÃO E TEMPO

function formatDuration(value) {
    if (value == null) return "";
    if (typeof value === "string" && value.includes(":")) return value;

    if (typeof value === "string" && value.startsWith("PT")) {
        const match = value.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
        if (match) {
            const h = Number(match[1] || 0);
            const m = Number(match[2] || 0);
            const s = Number(match[3] || 0);
            const total = h * 3600 + m * 60 + s;
            return formatDuration(total);
        }
    }

    const totalSeconds = Number(value);
    if (Number.isNaN(totalSeconds)) return String(value);

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    if (hours > 0) {
        return `${hours}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }

    return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function timeAgo(dateValue) {
    const date = new Date(dateValue);
    if (Number.isNaN(date.getTime())) return String(dateValue);

    const now = new Date();
    const diffMs = now - date;
    const minutes = Math.floor(diffMs / 60000);
    const hours = Math.floor(diffMs / 3600000);
    const days = Math.floor(diffMs / 86400000);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (minutes < 1) return "agora";
    if (minutes < 60) return `${minutes} min atrás`;
    if (hours < 24) return `${hours} h atrás`;
    if (days < 30) return `${days} dias atrás`;
    if (months < 12) return `${months} meses atrás`;
    return `${years} anos atrás`;
}



// RENDERIZAÇÃO DOS VÍDEOS
function videos_Load(result) {
    // PEGA A DIV DOS VÍDEOS APENAS
    const videos_Main = document.querySelector(".videosGrid");

    if (!videos_Main) {
        return;
    }

    // CRIA O ELEMENTO DOS VÍDEOS
    const videos_insert_Main = document.createElement("div");
    videos_insert_Main.classList.add("videos_show");

    result.videosPlay.forEach(element => {
        videos_insert_Main.innerHTML += `
        <div class="video_Card">
            <a href = "${element.url}">
                <div class="thumb_main">
                    <span class = "thumb_video_liked" style="background-image: url(${element.thumb_video})"> <!-- AQUI FICARÁ A THUMBNAIL --></span>
                    <span>${formatDuration(element.duration)}</span>
                </div>

                <div class = "legenda_main">

                    <div class = "logo_canal">
                        <span class= "logo_canal_liked"><!-- AQUI FICARÁ A LOGO DO CANAL --></span>
                    </div>

                    <div class = "descritivo_video">
                        <h2>${element.title_video}</h2>
                        <span>${element.title_channel}</span>

                        <div class= "view_time">
                            <span>2 mil views · ${timeAgo(element.publi_date)}</span>
                        </div>
                    </div>

                    <div class = "tres_pontinhos">
                        <button id = "mais_opcoes">
                            <img src="./assets/icons/geral/tres_points.svg" alt="Mais opções Ícone">
                        </button>
                    </div>
                </div>


            </a>
        </div>
        `
        const logo_canal_liked = videos_insert_Main.querySelectorAll(".logo_canal_liked");
        const index = Array.from(logo_canal_liked).length - 1;
        if (result.logo_channel[index]) {
            logo_canal_liked[index].style.backgroundImage = `url(${result.logo_channel[index]})`;
        }

    });

    videos_Main.appendChild(videos_insert_Main);
}


