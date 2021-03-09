import React from 'react';
import { View } from 'react-native';

import { initialDecks } from '../utils/data';
import DeckList from './DeckList';

const Main = () => {
  const decks = initialDecks;

  return (
    <View>
      <DeckList decks={decks} />
    </View>
  );
};

export default Main;
