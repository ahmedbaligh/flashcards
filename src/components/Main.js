import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { retrieveDecks } from '../utils/api';
import DeckList from './DeckList';

const Main = () => {
  const [decks, setDecks] = useState({});

  useEffect(() => {
    retrieveDecks().then(decks => setDecks(decks));
  }, []);

  return (
    <View>
      <DeckList decks={decks} />
    </View>
  );
};

export default Main;
