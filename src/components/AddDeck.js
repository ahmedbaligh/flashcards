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
import { addDeck } from '../utils/api';

const AddDeck = ({ navigation }) => {
  const [title, setTitle] = useState('');

  const onNewDeck = async () => {
    if (!title)
      return Alert.alert('Missing Field', 'Kindly, add a title first.');

    const [id, deck] = await addDeck(title);
    setTitle('');

    navigation.navigate('DeckDetails', { id, deck });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.field}>
        <Text style={styles.text}>What is your new deck's title?</Text>
        <TextInput
          autoFocus
          placeholder="Deck title"
          style={styles.input}
          onChangeText={text => setTitle(text)}
          value={title}
        />
      </View>

      <View style={[styles.field, styles.button]}>
        <Button title="Add Deck" onPress={onNewDeck} />
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

export default AddDeck;
