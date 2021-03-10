import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigtor from './src/components/Navigator';
import { nav } from './src/utils/colors';

export default () => (
  <NavigationContainer theme={{ colors: nav }}>
    <Navigtor />
  </NavigationContainer>
);
