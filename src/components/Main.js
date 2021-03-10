import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { retrieveDecks } from '../utils/api';
import DeckList from './DeckList';

const Main = ({ navigation }) => {
  const [decks, setDecks] = useState({});

  useEffect(() => {
    retrieveDecks().then(decks => setDecks(decks));
  });

  return (
    <View>
      <DeckList decks={decks} navigation={navigation} />
    </View>
  );
};

export default Main;
