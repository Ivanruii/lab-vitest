import { scoreToWin, minOfCards, gameData } from './model'
import { ElementWithInnerText, Card } from './types'

const elements = {
    onlyOnGameContainer: getElementOrThrow<HTMLDivElement>('only-on-game'),
    onlyWhenGameEnded: getElementOrThrow<HTMLDivElement>('only-when-game-ended'),
    score: getElementOrThrow<HTMLSpanElement>('score'),
    remainingCards: getElementOrThrow<HTMLSpanElement>('remaining-cards'),
    card: getElementOrThrow<HTMLDivElement>('card'),
    pickCardButton: getElementOrThrow<HTMLButtonElement>('pick-card-button'),
    stayButton: getElementOrThrow<HTMLButtonElement>('stay-button'),
    message: getElementOrThrow<HTMLDivElement>('message'),
    newGameButton: getElementOrThrow<HTMLButtonElement>('new-game-button'),
}

function initializeElements() {
    return {
        ...elements
    }
}

function getElementOrThrow<Type>(id: string): Type {
    const element = document.getElementById(id) as Type
    if (!element) {
        throw new Error(`Element with id "${id}" not found.`)
    }
    return element
}

function setMessageText<Type extends ElementWithInnerText>(elementId: string, text: string, resetTime?: number): void {
    const element = getElementOrThrow(elementId)

    if (element) {
        (element as Type).innerText = String(text)
    }

    if (resetTime) {
        setTimeout(() => {
            (element as Type).innerText = ''
        }, resetTime)
    }
}

function changeImage(imgId: string, newSrc: string): void {
    const imgElement = document.getElementById(imgId) as HTMLImageElement
    if (imgElement) {
        imgElement.src = newSrc
    } else {
        throw new Error(`Image element with id "${imgId}" not found.`)
    }
}

function gameWinned() {
    const elements = initializeElements()
    if (gameData.roundScore === scoreToWin) {
        setMessageText<HTMLDivElement>("message", `Has ganado la partida.`)
        elements.onlyWhenGameEnded.style.display = "block"
    } else if (gameData.cardsInPiles === minOfCards) {
        setMessageText<HTMLDivElement>("message", `Te has quedado sin cartas, has ganado la partida con una puntuación de ${gameData.totalGameScore}.`)
        elements.onlyWhenGameEnded.style.display = "block"
    }
}

function gameOver() {
    setMessageText<HTMLDivElement>("message", `Has perdido la partida.`)
}

function updateUI(pickedCard: Card) {
    changeImage("card-img", pickedCard.url)
    setMessageText<HTMLDivElement>("card", String(gameData.roundScore))
}

function pickCardButton(pickedCard: Card) {
    if (pickedCard) {
        updateUI(pickedCard)
        updateElements()
    }
}

function stayButton(value: number) {
    gameData.roundScore = 0

    if (value) {
        setMessageText<HTMLDivElement>("message", `Has decidido plantarte. Si hubieras cogido una carta, te hubiera tocado: ${value}`)
    }
}

function newGameButton() {
    const elements = initializeElements()
    elements.onlyOnGameContainer.style.display = "block"
    elements.onlyWhenGameEnded.style.display = "none"
    setMessageText<HTMLDivElement>("message", `Has empezado una nueva partida.`)
}

function updateElements() {
    setMessageText<HTMLDivElement>("remaining-cards", `Cartas restantes: ${String(gameData.cardsInPiles)}`)
}

function resetUI() {
    const elements = initializeElements()
    changeImage("card-img", "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg")
    elements.onlyOnGameContainer.style.display = "none"
    elements.onlyWhenGameEnded.style.display = "block"
}


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

export { elements, updateUI, updateElements, gameWinned, setMessageText, changeImage, initializeElements, resetUI, gameOver, pickCardButton, stayButton, newGameButton, updateGame }