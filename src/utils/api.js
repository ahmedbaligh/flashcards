import AsyncStorage from '@react-native-async-storage/async-storage';
import { initialDecks } from './data';

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
