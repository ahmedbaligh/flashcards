import React from 'react';
import { Platform, StatusBar, View } from 'react-native';

import Main from './src/components/Main';

export default function App() {
  return (
    <View
      style={{
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
      }}
    >
      <Main />
    </View>
  );
}
