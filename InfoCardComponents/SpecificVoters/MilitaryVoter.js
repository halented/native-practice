import React from 'react'
import { Text, Button, ScrollView } from 'react-native'

function MilitaryVoter(props) {
    return (
        <ScrollView>
            <Text>Military</Text>
            <Text>{" "}</Text>
            <Button title='Go Back' onPress={props.goBack} />
        </ScrollView>
    )
}

export default MilitaryVoter