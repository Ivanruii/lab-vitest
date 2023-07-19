interface ElementWithInnerText {
    innerText: string
}

interface Card {
    name: string
    value: number
    url: string
}

interface gameData {
    cardsInPiles: number
    roundScore: number
    totalGameScore: number
}

export { ElementWithInnerText, Card, gameData }