const images = [
    "images/imagem1.jpg",
    "images/imagem2.jpg",
    "images/imagem3.jpg",
    "images/imagem4.jpg",
    "images/imagem5.jpg"
];

// Começa exibindo a imagem 2
let currentIndex = 1;

const carouselImage = document.getElementById("carousel-image");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const body = document.body; // Seleciona o elemento body

function updateImage() {
    // Atualiza a imagem do carrossel
    carouselImage.src = images[currentIndex];
    // Atualiza o plano de fundo do body
    body.style.backgroundImage = `url(${images[currentIndex]})`;
}

// Atualiza a imagem inicial para a imagem 2
updateImage();

prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

// Função para alternar a visibilidade do Spotify player
function toggleSpotify() {
    const spotifyPlayer = document.getElementById("spotify-player");
    if (spotifyPlayer.style.display === "none" || spotifyPlayer.style.display === "") {
        spotifyPlayer.style.display = "block"; // Exibe o player
    } else {
        spotifyPlayer.style.display = "none"; // Oculta o player
    }
}

function createHeart() {
    const heartsContainer = document.getElementById("hearts-container");
    const heart = document.createElement("div");
    heart.classList.add("heart");

    // Define uma posição horizontal aleatória
    heart.style.left = Math.random() * 100 + "vw";

    // Define um tamanho aleatório
    const size = Math.random() * 10 + 10; // Entre 10px e 20px
    heart.style.width = size + "px";
    heart.style.height = size + "px";

    // Define uma duração de animação aleatória
    heart.style.animationDuration = Math.random() * 2 + 3 + "s"; // Entre 3s e 5s

    heartsContainer.appendChild(heart);

    // Remove o coração após a animação
    setTimeout(() => {
        heart.remove();
    }, 5000); // Tempo igual à duração da animação
}

// Cria corações continuamente
setInterval(createHeart, 300); // Cria um coração a cada 300ms