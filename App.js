import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { ButtonGroup, ThemeProvider, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// valid icon names here: https://oblador.github.io/react-native-vector-icons/

const buttons = ["Board Locator", "How to Register"]

const theme = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

export default function App() {
  const [selectedIndex, setIndex] = useState(0)
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Header
          leftComponent={<Icon name='menufold' color='white' size={30}/> }
          centerComponent={{ text: 'OHIO VOTE HERO', style: { color: '#fff' } }}
          rightComponent={<Icon name='checkcircleo' color='white' size={30}/>}
        />
        <ButtonGroup
          onPress={(index) => setIndex(index)}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{ height: 100 }}
        />
      </ThemeProvider>
    </SafeAreaProvider>
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
