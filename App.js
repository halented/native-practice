import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { ButtonGroup, ThemeProvider, Header } from 'react-native-elements';
import horn from './horn.png'

const buttons = ["Board Locator", "How to Register"]

const theme = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

export default function App() {
  const [selectedIndex, setIndex] = useState(0)
  return (
    <ThemeProvider theme={theme}>
      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'VOTE HERO', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
      <ButtonGroup
        onPress={(index) => setIndex(index)}
        selectedIndex={selectedIndex}
        buttons={buttons}
        containerStyle={{ height: 100 }}
      />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
