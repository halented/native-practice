import React from 'react'
import { Text, Button, ScrollView } from 'react-native'
import { Card } from 'react-native-elements'

function IncarceratedVoter(props) {
    return (
        <ScrollView>
            <Text>Incarcerated</Text>
            <Text>{" "}</Text>
            <Card.Divider />
            <Text>{" "}</Text>
            <Button title='Go Back' onPress={props.goBack} />
        </ScrollView>
    )
}

export default IncarceratedVoter
