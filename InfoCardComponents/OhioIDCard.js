import React from 'react'
import { Text, Button } from 'react-native'

function OhioIDCard() {
    return (
        <>
            <Text>Licensing Info</Text>
            <Text>{" "}</Text>
            <Button title='Go Back' onPress={()=> console.log("object")}/>
        </>
    )
}

export default OhioIDCard
