const scoreToWin: number = 7.5;
const minOfCards: number = 0;

// Global variables

interface gameData {
    cardsInPiles: number;
    roundScore: number;
    totalGameScore: number;
}

let gameData: gameData = {
    cardsInPiles: 40,
    roundScore: 0,
    totalGameScore: 0
}


interface Card {
    name: string;
    value: number;
    url: string;
}

// Game elements

const cardsOfDeck: Card[] = [
    { name: "1 Copas", value: 1, url: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg" },
    { name: "2 Copas", value: 2, url: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg" },
    { name: "3 Copas", value: 3, url: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg" },
    { name: "4 Copas", value: 4, url: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg" },
    { name: "5 Copas", value: 5, url: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg" },
    { name: "6 Copas", value: 6, url: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg" },
    { name: "7 Copas", value: 7, url: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg" },
    { name: "Sota de copas", value: 0.5, url: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg" },
    { name: "Caballo de copas", value: 0.5, url: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg" },
    { name: "Rey de copas", value: 0.5, url: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg" }
];


export { scoreToWin, minOfCards, gameData, cardsOfDeck };