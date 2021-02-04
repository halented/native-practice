import React from 'react'
import { View } from 'react-native'
import Placesearch from 'react-native-placesearch'

function App() {
    return (
        <View>
            <Placesearch
                apikey="AIzaSyDxphqUmba52NVWfbD3VU6vkPlX7hNY9Wc" // required *
                SelectedAddress={(data) => console.log(data)} // required *
                // country="country code" //optional
                // InputContainer={{ 'your style goes here'}} //optional
                // MainContainer={{ 'your style goes here'}} //optional
                // ListStyle={{ 'your style goes here'}} //optional
                // ListTextStyle={{ 'your style goes here'}} //optional
                // ListIconStyle={{ 'your style goes here'}} //optional
                // ImgStyle={{ 'your style goes here'}} //optional
                // Img={{ 'your style goes here'}} //optional
                // textInput={{ 'your style goes here'}} //optional
                // placeHolder={{ 'type any textInput placeholder as you like'}} //optional
            />
        </View>
    )
}

export default App
