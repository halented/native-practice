import React, { useState } from 'react'
import { View } from 'react-native'
import Placesearch from 'react-native-placesearch'
import { MAPS_API_KEY } from '@env'

function BoardLocator() {
    const [address, setAddress] = useState('')
    return (
        <View style={{ flex: 1 }}>
            <Placesearch
                apikey={MAPS_API_KEY} // required *
                SelectedAddress={(data) => {
                    // this should save the user's address in state and make another fetch using the county to find the board of elections
                    console.log(data)
                }} // required *
                country="usa" //optional
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

export default BoardLocator

// optional props for placesearch
// MainContainer={{ 'your style goes here'}}
// ListStyle={{ 'your style goes here'}}
// ListTextStyle={{ 'your style goes here'}}
// ListIconStyle={{ 'your style goes here'}}
// ImgStyle={{ 'your style goes here'}}
// Img={{ 'your style goes here'}}
// placeHolder={{ 'type any textInput placeholder as you like'}}
