import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Main from './Main';
import AddDeck from './AddDeck';
import DeckDetails from './DeckDetails';
import AddCard from './AddCard';

const Tab = createBottomTabNavigator();

const HomeTabs = () => (
  <Tab.Navigator
    initialRouteName="Decks"
    backBehavior={'initialRoute'}
    tabBarOptions={{
      activeTintColor: '#fff',
      labelStyle: {
        fontSize: 16,
        margin: 14
      }
    }}
  >
    <Tab.Screen name="Main" component={Main} options={{ title: 'Decks' }} />
    <Tab.Screen
      name="AddDeck"
      component={AddDeck}
      options={{ title: 'New Deck' }}
    />
  </Tab.Navigator>
);

const Stack = createStackNavigator();

export default Navigator = () => (
  <Stack.Navigator
    screenOptions={{
      animationEnabled: true,
      headerTitleAlign: 'center'
    }}
  >
    <Stack.Screen name="Home" component={HomeTabs} />
    <Stack.Screen
      name="DeckDetails"
      component={DeckDetails}
      options={({ route }) => ({ title: `${route.params.deck.title} Deck` })}
    />
    <Stack.Screen
      name="AddCard"
      component={AddCard}
      options={{ title: 'New Card' }}
    />
  </Stack.Navigator>
);
