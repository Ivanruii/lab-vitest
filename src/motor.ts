import { Card, gameData } from './types'

function giveRandomCard(cardsOfDeck: Card[], gameData: gameData) {
    const randomIndex = Math.floor(Math.random() * cardsOfDeck.length)
    const pickedCard = cardsOfDeck[randomIndex]

    gameData.cardsInPiles -= 1
    return pickedCard
}

export { giveRandomCard }