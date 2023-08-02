import { giveRandomCard } from './motor';
import { cardsOfDeck, gameData } from './model';
import { Card } from './types';

describe('giveRandomCard', () => {
  it('should return a card from the deck', () => {
    const pickedCard = giveRandomCard(cardsOfDeck, gameData);
    
    expect(cardsOfDeck).toContainEqual(pickedCard);
  });

  it('should reduce the number of cards in piles by 1', () => {
    const initialCards = gameData.cardsInPiles;
    giveRandomCard(cardsOfDeck, gameData);

    expect(gameData.cardsInPiles).toBe(initialCards - 1);
  });

  it('should return undefined if there are no cards in the deck', () => {
    const cardsOfDeck: Card[] = [];

    const pickedCard = giveRandomCard(cardsOfDeck, gameData);
    expect(pickedCard).toBeUndefined();
  });

  it('should only return a card that is in the deck', () => {
    const pickedCard = giveRandomCard(cardsOfDeck, gameData);
    expect(cardsOfDeck.includes(pickedCard)).toBe(true);
  }); 
});
