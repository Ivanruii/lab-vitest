import { scoreToWin, gameData, cardsOfDeck } from './model'
import { gameWinned, resetUI, gameOver } from './ui'
import { Card } from './types'

function resetGame() {
    resetUI()
    gameData.cardsInPiles = 40
    gameData.roundScore = 0
}

function updateGame(pickedCard: Card) {
    gameData.cardsInPiles -= 1
    gameData.roundScore += pickedCard.value
    gameData.totalGameScore += pickedCard.value
    if (gameData.roundScore > scoreToWin) {
        gameOver()
        resetGame()
    } else {
        gameWinned()
    }
}

function giveRandomCard(): Card {
    const randomIndex = Math.floor(Math.random() * cardsOfDeck.length)
    const pickedCard = cardsOfDeck[randomIndex]

    gameData.cardsInPiles -= 1
    return pickedCard
}


export { giveRandomCard, updateGame }