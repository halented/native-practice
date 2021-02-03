import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { ButtonGroup, ThemeProvider, Header, Card } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Icon from 'react-native-vector-icons/AntDesign';
// valid icon names here: https://oblador.github.io/react-native-vector-icons/

import InfoCard from './InfoCard'


const buttons = ["Board Locator", "How to Register", "How to Vote"]

const theme = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}
const styles = StyleSheet.create({
  bottomCard: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'rgb(32, 137, 220)'
  },
});

export default function App() {
  const [selectedIndex, setIndex] = useState(0)
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Header
          leftComponent={<Icon name='star' color='white' size={30} />}
          centerComponent={{ text: 'OHIO VOTE HERO', style: { color: '#fff', fontSize: 30 } }}
          rightComponent={<Icon name='star' color='white' size={30} />}
        />
        <ButtonGroup
          onPress={(index) => setIndex(index)}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{ height: 100 }}
        />
        <InfoCard selected={buttons[selectedIndex]} />
        <Card>
          <Text style={styles.bottomCard}>About | FAQ | Donate</Text>
        </Card>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
