import React from 'react'
import { Text, Button, ScrollView } from 'react-native'

function UnshelteredVoter(props) {
    return (
        <ScrollView>
            <Text>Unsheltered Info</Text>
            <Text>{" "}</Text>
            <Button title='Go Back' onPress={props.goBack} />
        </ScrollView>
    )
}

export default UnshelteredVoter
