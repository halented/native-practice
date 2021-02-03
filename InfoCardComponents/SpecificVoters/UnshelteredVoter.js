import React from 'react'
import { Text, Button } from 'react-native'

function UnshelteredVoter() {
    return (
        <ScrollView>
        <Text>Unsheltered Info</Text>
        <Text>{" "}</Text>
        <Button title='Go Back' onPress={props.goBack}/>
    </ScrollView>
    )
}

export default UnshelteredVoter
