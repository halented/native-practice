import React from 'react'
import { Text, Button, ScrollView } from 'react-native'

function OhioIDCard(props) {
    return (
        <ScrollView>
            <Text>Licensing Info</Text>
            <Text>{" "}</Text>
            <Button title='Go Back' onPress={props.goBack}/>
        </ScrollView>
    )
}

export default OhioIDCard
