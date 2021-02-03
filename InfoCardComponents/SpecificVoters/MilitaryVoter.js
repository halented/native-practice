import React from 'react'
import { Text, Button } from 'react-native'

function MilitaryVoter() {
    return (
        <ScrollView>
            <Text>Military</Text>
            <Text>{" "}</Text>
            <Button title='Go Back' onPress={props.goBack} />
        </ScrollView>
    )
}

export default MilitaryVoter