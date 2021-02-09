import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
import { Card } from 'react-native-elements'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { MAPS_API_KEY } from '@env'
import { styles } from '../styles'
import { showLocation } from 'react-native-map-link'

const mapsKey = `${MAPS_API_KEY}`

function BoardLocator() {
    const [address, setAddress] = useState('')
    const [showBoard, setShowBoard] = useState(true)

    const renderFlipper = () => {
        return showBoard ?
            (
                <Card containerStyle={styles.container}>
                    <Text>Your Address: {address.description}</Text>
                    <Text>{" "}</Text>
                    <Card.Divider />
                    <Text>Your County Board of Elections Address:</Text>
                    <Text onPress={() => {
                        // this thing actually requires lat/long, so need to figure out where to get that from the places event
                        showLocation({
                            googlePlaceId: 'ChIJKbLpOI8UkFQRC30sDr56TAs'
                        })
                    }}>press me</Text>
                    <Text>{" "}</Text>
                    <Card.Divider />
                    <Button title='Reset' onPress={() => { setShowBoard(false) }} />
                </Card>
            )
            :
            (
                <View style={styles.placesInput}>
                    <GooglePlacesAutocomplete
                        placeholder='Search'
                        onPress={(data, details = null) => {
                            // 'details' is provided when fetchDetails = true
                            console.log(data, details);
                            // when we receive an address, need to figure out which county it is in and return the board address.
                            setShowBoard(true)
                            setAddress(data)
                        }}
                        query={{
                            key: mapsKey,
                            language: 'en',
                        }}
                        onFail={(error) => console.error(error)}
                    />
                </View>
            )
    }
    return (
        renderFlipper()
    )
}

export default BoardLocator

// Object {
//     "description": "Din Tai Fung, Northeast 46th Street, Seattle, WA, USA",
//     "matched_substrings": Array [
//       Object {
//         "length": 3,
//         "offset": 0,
//       },
//     ],
//     "place_id": "ChIJKbLpOI8UkFQRC30sDr56TAs",
//     "reference": "ChIJKbLpOI8UkFQRC30sDr56TAs",
//     "structured_formatting": Object {
//       "main_text": "Din Tai Fung",
//       "main_text_matched_substrings": Array [
//         Object {
//           "length": 3,
//           "offset": 0,
//         },
//       ],
//       "secondary_text": "Northeast 46th Street, Seattle, WA, USA",
//     },
//     "terms": Array [
//       Object {
//         "offset": 0,
//         "value": "Din Tai Fung",
//       },
//       Object {
//         "offset": 14,
//         "value": "Northeast 46th Street",
//       },
//       Object {
//         "offset": 37,
//         "value": "Seattle",
//       },
//       Object {
//         "offset": 46,
//         "value": "WA",
//       },
//       Object {
//         "offset": 50,
//         "value": "USA",
//       },
//     ],
//     "types": Array [
//       "restaurant",
//       "food",
//       "point_of_interest",
//       "establishment",
//     ],
//   }
