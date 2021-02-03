import React from 'react'
import { Text, Button, ScrollView } from 'react-native'

function IncarceratedVoter(props) {
    return (
        <ScrollView>
            <Text>Incarcerated</Text>
            <Text>{" "}</Text>
            <Button title='Go Back' onPress={props.goBack} />
        </ScrollView>
    )
}

export default IncarceratedVoter
