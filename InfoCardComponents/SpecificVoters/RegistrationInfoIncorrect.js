import React from 'react'
import { Text, Button, ScrollView } from 'react-native'

function RegistrationInfoIncorrect() {
    return (
        <ScrollView>
            <Text>How to Correct Registration Info</Text>
            <Text>{" "}</Text>
            <Button title='Go Back' onPress={props.goBack} />
        </ScrollView>
    )
}

export default RegistrationInfoIncorrect
