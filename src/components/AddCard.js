import React, { useState } from 'react';
import {
  SafeAreaView,
  TextInput,
  StyleSheet,
  Text,
  Button,
  View,
  Alert
} from 'react-native';
import { addCard } from '../utils/api';

const AddCard = ({ route, navigation }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const onNewCard = async () => {
    if (!question)
      return Alert.alert('Missing Field', 'Kindly, add a question first.');

    if (!answer)
      return Alert.alert('Missing Field', 'Kindly, add an answer first.');

    const deckID = route.params.id;
    const deck = await addCard(deckID, { question, answer });

    navigation.navigate('DeckDetails', { deck });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.field}>
        <Text style={styles.text}>What is your new question?</Text>
        <TextInput
          autoFocus
          placeholder="Question"
          style={styles.input}
          onChangeText={text => setQuestion(text)}
          value={question}
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.text}>What is your new answer?</Text>
        <TextInput
          placeholder="Answer"
          style={styles.input}
          onChangeText={text => setAnswer(text)}
          value={answer}
        />
      </View>

      <View style={[styles.field, styles.button]}>
        <Button title="Add Card" onPress={onNewCard} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 15,
    marginVertical: 30
  },
  field: {
    width: '100%',
    marginBottom: 30
  },
  text: {
    fontSize: 26,
    marginBottom: 15
  },
  input: {
    paddingHorizontal: 15,
    fontSize: 20,
    height: 60,
    borderColor: 'gray',
    borderWidth: 2
  },
  button: {
    paddingVertical: 5,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 50
  }
});

export default AddCard;
