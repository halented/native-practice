import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image, FlatList, ScrollView, SectionList } from 'react-native';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64
};

export default function App() {
  const [isHungry, setHungry] = useState(true)
  const [text, setText] = useState('')
  const title = isHungry ? "Feed Kitty" : "Let kitty nap"

  const translate = (words) => {
    let newText = words.split(" ").map(w => "🍕").join("")
    setText(newText)
  }
  const abstractedRenderForFlatList = (item) => {
    return <Text>{item.key}</Text>
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22
    },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 14,
      fontWeight: 'bold',
      backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  })

  const SectionListBasics = () => {
    return (
        <SectionList
          sections={[
            { title: 'D', data: ['Devin', 'Dan', 'Dominic'] },
            { title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie'] },
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
    );
  }

  return (
    <View style={styles.container}>
      <Text>Vivid</Text>
      <FlatList data={[{ key: "Kev", key: "singo", key: "Goggorooro", key: "lolland hop", key: "if", key: "junger", key: "forrrrrrrgomp" }]} renderItem={abstractedRenderForFlatList} />
      {SectionListBasics()}
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

        <StatusBar style="auto" />
        <TextInput
          onChangeText={translate}
          style={{ height: 40 }}
          placeholder="you cad"
        />
        <Text>
          {text}
        </Text>

        <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Text style={{ fontSize: 96 }}>If you like</Text>
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Text style={{ fontSize: 96 }}> down</Text>
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Text style={{ fontSize: 96 }}>'s the best</Text>
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Text style={{ fontSize: 96 }}>Framework ?</Text>
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Text style={{ fontSize: 80 }}>Reat Naive</Text>
      </ScrollView>
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
