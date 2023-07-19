import './style.css'
import { initializeElements, pickCardButton, stayButton, newGameButton, updateGame } from './ui'
import { gameData, cardsOfDeck } from './model'
import { giveRandomCard } from './motor'

window.addEventListener("DOMContentLoaded", () => {
    startGame()
})

function startGame() {
    const elements = initializeElements()

    elements.pickCardButton.onclick = () => {
        const pickedCard = giveRandomCard(cardsOfDeck, gameData)
        updateGame(pickedCard)
        pickCardButton(pickedCard)
    }

    elements.stayButton.onclick = () => {
        const pickedCard = giveRandomCard(cardsOfDeck, gameData)
        stayButton(pickedCard.value)
    }

    elements.newGameButton.onclick = newGameButton
}