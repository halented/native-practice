import React, { useState } from 'react'
import { View, Button, Text } from 'react-native'
import Placesearch from 'react-native-placesearch'

function BoardLocator() {
    const [address, setAddress] = useState('')
    return (
        <View style={{ flex: 1 }}>
            <Placesearch
                apikey="AIzaSyDxphqUmba52NVWfbD3VU6vkPlX7hNY9Wc" // required *
                SelectedAddress={(data) => {
                    // this should save the user's address in state and make another fetch using the county to find the board of elections
                    setAddress(data)
                }} // required *
                country="usa" //optional
                InputContainer={{height: 100, color: 'pink', backgroundColor: 'teal', fontWeight: 'bold', fontStyle: 'italic'}}
                textInput={{height: 100, color: 'pink', backgroundColor: 'teal', fontWeight: 'bold', fontStyle: 'italic'}}
            />
            <Text>{address}</Text>
        </View>
    )
}

export default BoardLocator

// optional props for placesearch
// MainContainer={{ 'your style goes here'}}
// ListStyle={{ 'your style goes here'}}
// ListTextStyle={{ 'your style goes here'}}
// ListIconStyle={{ 'your style goes here'}}
// ImgStyle={{ 'your style goes here'}}
// Img={{ 'your style goes here'}}
// placeHolder={{ 'type any textInput placeholder as you like'}}
