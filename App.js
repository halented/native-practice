import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image, ScrollView } from 'react-native';

export default function App() {
  const [isHungry, setHungry] = useState(true)
  const [text, setText] = useState('')
  const title = isHungry ? "Feed Kitty" : "Let kitty nap"

  const translate = (words) => {
    let newText = words.split(" ").map(w=> "🍕").join("")
    setText(newText)
  }

  return (
    <View style={styles.container}>
      <Text>Vivid</Text>
      <ScrollView>
        <Image
          source={{
            uri: "https://robohash.org/plinko.png"
          }}
          style={{ width: 200, height: 200 }}
        />
        <Text>Cat Tinkerbell {isHungry ? "is" : "is not"} hungry.</Text>
        <Button
          onPress={() => setHungry(!isHungry)}
          title={title}
          accessibilityLabel="It's pressable...how can you resist" />
      </ScrollView>
      <StatusBar style="auto" />

      <TextInput
        onChangeText={translate}
        style={{ height: 40}}
        placeholder="you cad"
      />
      <Text>
        {text}
      </Text>
    </View>
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
