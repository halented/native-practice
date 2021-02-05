import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { MAPS_API_KEY } from '@env'
import { styles } from '../styles'

function BoardLocator() {
    const [address, setAddress] = useState('')
    const mapsKey = `${MAPS_API_KEY}`
    return (
        <View style={styles.placesInput}>
            <GooglePlacesAutocomplete
                placeholder='Search'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);
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

export default BoardLocator