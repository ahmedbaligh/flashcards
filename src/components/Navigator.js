import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './Main';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={Main} options={{ title: 'Decks' }} />
    </Stack.Navigator>
  );
};

export default Navigator;
