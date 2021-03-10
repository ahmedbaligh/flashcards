import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Deck from './Deck';

const DeckList = ({ decks, navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {Object.keys(decks).map(deckID => (
        <Deck key={deckID} deck={decks[deckID]} navigation={navigation} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: 'rgba(0, 0, 0, 0.1)' }
});

export default DeckList;
