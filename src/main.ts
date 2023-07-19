import './style.css'
import { scoreToWin, gameData, cardsOfDeck } from './model'
import { gameWinned, initializeElements, resetUI, gameOver, pickCardButton, stayButton, newGameButton } from './ui'

interface Card {
    name: string;
    value: number;
    url: string;
}

window.addEventListener("DOMContentLoaded", () => {
    startGame();
});

function updateGame(pickedCard: Card) {
    gameData.cardsInPiles -= 1;
    gameData.roundScore += pickedCard.value;
    gameData.totalGameScore += pickedCard.value;
    if (gameData.roundScore > scoreToWin) {
        gameOver();
        resetGame()
    } else {
        gameWinned();
    }
}

function startGame() {
    const elements = initializeElements();

    elements.pickCardButton.onclick = () => { 
        const pickedCard = giveRandomCard();
        updateGame(pickedCard) 
        pickCardButton(pickedCard)
    }

    elements.stayButton.onclick = () => stayButton(giveRandomCard());

    elements.newGameButton.onclick = newGameButton;
}

function resetGame() {
    resetUI()
    gameData.cardsInPiles = 40;
    gameData.roundScore = 0;
}

function giveRandomCard(): Card {
    const randomIndex = Math.floor(Math.random() * cardsOfDeck.length);
    const pickedCard = cardsOfDeck[randomIndex];

    gameData.cardsInPiles -= 1;
    return pickedCard;
}
