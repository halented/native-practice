import React from 'react'
import { View } from 'react-native'
import Placesearch from 'react-native-placesearch'
import { MAPS_API_KEY } from '@env'

function Psearch() {
    // (adminstrative_area_level_2) == county?
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

export default Psearch

// Example of what the selection logged:
// Object {
//     "description": "Domino's Pizza, 1st Avenue, Seattle, WA, USA",
//     "matched_substrings": Array [
//       Object {
//         "length": 8,
//         "offset": 0,
//       },
//     ],
//     "place_id": "ChIJKzZ98U8VkFQRo_9Ir8dE9aw",
//     "reference": "ChIJKzZ98U8VkFQRo_9Ir8dE9aw",
//     "structured_formatting": Object {
//       "main_text": "Domino's Pizza",
//       "main_text_matched_substrings": Array [
//         Object {
//           "length": 8,
//           "offset": 0,
//         },
//       ],
//       "secondary_text": "1st Avenue, Seattle, WA, USA",
//     },
//     "terms": Array [
//       Object {
//         "offset": 0,
//         "value": "Domino's Pizza",
//       },
//       Object {
//         "offset": 16,
//         "value": "1st Avenue",
//       },
//       Object {
//         "offset": 28,
//         "value": "Seattle",
//       },
//       Object {
//         "offset": 37,
//         "value": "WA",
//       },
//       Object {
//         "offset": 41,
//         "value": "USA",
//       },
//     ],
//     "types": Array [
//       "meal_delivery",
//       "meal_takeaway",
//       "restaurant",
//       "food",
//       "point_of_interest",
//       "establishment",
//     ],
//   }