import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Button,
  Alert
} from 'react-native';
import { deleteDeck } from '../utils/api';

const DeckDetails = ({ route, navigation }) => {
  const { id, deck } = route.params;
  const { title, cards } = deck;

  const onDeckDelete = () => {
    deleteDeck(id);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.cards}>{cards.length} cards</Text>

        <View style={styles.controls}>
          <View style={styles.button}>
            <Button
              title="Add Card"
              color="dodgerblue"
              onPress={() => navigation.navigate('AddCard', { id })}
            />
          </View>

          <View style={styles.button}>
            <Button
              title="Start Quiz"
              disabled={!cards.length}
              onPress={() => navigation.navigate('Quiz', { cards, id })}
            />
          </View>

          <View style={styles.delete}>
            <Button
              title="Delete Deck"
              color="red"
              onPress={() =>
                Alert.alert(
                  'Delete Confirmation',
                  `Are you sure you want to delete "${title}" deck?`,
                  [
                    {
                      text: 'Yes',
                      style: 'destructive',
                      onPress: onDeckDelete
                    },
                    { text: 'No', style: 'cancel' }
                  ]
                )
              }
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  info: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 50,
    marginBottom: 10
  },
  cards: {
    fontSize: 20,
    color: 'gray'
  },
  controls: {
    marginTop: 70
  },
  button: {
    width: 300,
    marginBottom: 10,
    borderColor: 'gray',
    borderWidth: 1
  },
  delete: {
    marginTop: 50
  }
});

export default DeckDetails;
