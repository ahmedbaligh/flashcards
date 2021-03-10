import AsyncStorage from '@react-native-async-storage/async-storage';
import { initialDecks } from './data';
import { generateID } from './helper';

const KEY = 'flashcards';

export const retrieveDecks = async () => {
  try {
    const data = await AsyncStorage.getItem(KEY);

    if (data) return JSON.parse(data);
    else {
      const data = JSON.stringify(initialDecks);
      await AsyncStorage.setItem(KEY, data);
      return initialDecks;
    }
  } catch (e) {
    await AsyncStorage.setItem(KEY, JSON.stringify(initialData));
    return initialDecks;
  }
};

export const deleteDeck = async id => {
  const data = await AsyncStorage.getItem(KEY);

  if (data) {
    const decks = JSON.parse(data);

    delete decks[id];
    await AsyncStorage.setItem(KEY, JSON.stringify(decks));
  }

  return;
};

export const addCard = async (deckID, card) => {
  const data = await AsyncStorage.getItem(KEY);

  if (data) {
    const decks = JSON.parse(data);
    const deck = decks[deckID];

    deck.cards.push(card);

    const updatedDeck = JSON.stringify({
      [deckID]: deck
    });

    await AsyncStorage.mergeItem(KEY, updatedDeck);
    return;
  }
};

export const addDeck = async title => {
  const id = generateID();

  const deck = JSON.stringify({
    [id]: { title, cards: [] }
  });

  await AsyncStorage.mergeItem(KEY, deck);

  return [id, JSON.parse(deck)[id]];
};
