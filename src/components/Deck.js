import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const Deck = ({ id, deck, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.deck}
      onPress={() =>
        navigation.navigate('DeckDetails', { id, deck, navigation })
      }
    >
      <Text style={styles.title}>{deck.title}</Text>
      <Text style={styles.cards}>{`${deck.cards.length} cards`}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  deck: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15
  },
  title: {
    fontSize: 22,
    fontWeight: '700'
  },
  cards: {
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.6)'
  }
});

export default Deck;
