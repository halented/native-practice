import React, { useState } from 'react'
import { Card } from 'react-native-elements'
import { Text, StyleSheet} from 'react-native'
import cards from './InfoCardComponents/import-consolidator'
import HowToRegister from './InfoCardComponents/HowToRegister'
import BoardLocator from './InfoCardComponents/BoardLocator'
import HowToVote from './InfoCardComponents/HowToVote'

const InfoCard = (props) => {

    const conditionalRender = () => {
        switch (props.selected) {
            case "How to Register":
                return <HowToRegister />
            case "Board Locator":
                return <BoardLocator />
            case "How to Vote":
                return <HowToVote />
            default:
                return <Text>Make a Selection Above</Text>
        }
    }



    return (
        <Card containerStyle={styles.container}>
            {
                conditionalRender()
            }
        </Card>
    )
}


export default InfoCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});