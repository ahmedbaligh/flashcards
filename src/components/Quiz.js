import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import CardFlip from 'react-native-flip-card';
import { createNotification, removeNotification } from '../utils/helper';

const Quiz = ({ route, navigation }) => {
  const [index, setIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [isOver, setIsOver] = useState(false);
  const [flip, setFlip] = useState(false);

  const { cards, id } = route.params;
  const cardsCount = cards.length;
  const card = cards[index];

  const storeAnswer = answer => {
    setIsOver(cards[index + 1] ? false : true);
    setIndex(i => (cards[i + 1] ? i + 1 : i));
    setCorrectCount(count => (answer ? count + 1 : count));

    setFlip(!flip);
  };

  const restartQuiz = () => {
    setIsOver(false);
    setIndex(0);
    setCorrectCount(0);
  };

  const returnToDeck = () => {
    // Reset notifications
    removeNotification().then(createNotification());

    // dispatch(handleSaveScore(id, correctCount));
    navigation.navigate('DeckDetails', { id });
  };

  return cards?.length ? (
    <View style={{ flex: 1 }}>
      {!isOver ? (
        <View style={styles.flipContainer}>
          <CardFlip
            style={styles.flipCard}
            friction={50}
            flipHorizontal={true}
            flip={flip}
          >
            <View>
              <View style={styles.remaining}>
                <Text style={styles.remainingText}>
                  {`${cardsCount - index - 1} more questions to go..`}
                </Text>
              </View>
              <View style={styles.cardContent}>
                <Text style={styles.question}>{card.question}</Text>
              </View>
              <View style={styles.grading}>
                <View>
                  <Text>Touch to reveal the answer</Text>
                </View>
              </View>
            </View>

            <View style={{ flex: 1 }}>
              <View style={styles.remaining}>
                <Text style={styles.remainingText}>
                  {`${cardsCount - index - 1} more questions to go..`}
                </Text>
              </View>
              <View style={styles.cardContent}>
                <Text style={styles.answer}>{card.answer}</Text>
              </View>
              <View
                style={[styles.grading, { justifyContent: 'space-evenly' }]}
              >
                <Button
                  title="Correct"
                  color="green"
                  onPress={() => storeAnswer(true)}
                />

                <Button
                  title="Incorrect"
                  color="red"
                  onPress={() => storeAnswer(false)}
                />
              </View>
            </View>
          </CardFlip>
        </View>
      ) : (
        <View style={styles.flipCard}>
          <View style={{ flex: 1 }}>
            <View style={styles.cardContent}>
              <Text style={styles.score}>
                {`You answered ${correctCount} out of ${cardsCount} correctly.`}
              </Text>
              <Text style={styles.score}>{`Your score is ${Math.round(
                (correctCount / cardsCount) * 100
              )}%`}</Text>
            </View>
            <View style={styles.buttons}>
              <View style={styles.button}>
                <Button title="Restart" style={styles} onPress={restartQuiz} />
              </View>

              <View style={styles.button}>
                <Button
                  title="Back to Deck"
                  style={styles}
                  onPress={returnToDeck}
                />
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: { padding: 10, margin: 10 },
  remaining: { flex: 0.3, justifyContent: 'center' },
  remainingText: { fontSize: 18, color: 'gray', textAlign: 'center' },
  cardContent: { flex: 0.5, justifyContent: 'center', marginHorizontal: 10 },
  grading: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  flipContainer: { flex: 1, flexDirection: 'row', justifyContent: 'center' },
  flipCard: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    shadowRadius: 4,
    borderRadius: 16,
    shadowOpacity: 0.5,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    margin: 40
  },
  buttons: {
    flex: 0.4,
    flexDirection: 'column'
  },
  button: {
    borderWidth: 2,
    borderColor: 'gray',
    marginVertical: 15,
    paddingVertical: 5
  },
  cardText: { textAlign: 'center' },
  question: { textAlign: 'center', fontSize: 26, fontWeight: '700' },
  answer: { textAlign: 'center', fontSize: 24, fontWeight: '500' },
  score: { textAlign: 'center', fontSize: 22, marginBottom: 20 }
});

export default Quiz;
