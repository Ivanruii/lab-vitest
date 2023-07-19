import './style.css'
import { initializeElements, pickCardButton, stayButton, newGameButton } from './ui'
import { giveRandomCard, updateGame} from './motor'

window.addEventListener("DOMContentLoaded", () => {
    startGame();
});

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