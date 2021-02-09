import React, { useState } from 'react'
import { Card } from 'react-native-elements'
import { Text, StyleSheet } from 'react-native'
import { HowToRegister, BoardLocator, HowToVote } from './InfoCardComponents/import-consolidator'
import { styles } from './styles'

const InfoCard = (props) => {

    const conditionalRender = () => {
        switch (props.selected) {
            case "How to Register":
                return (
                    <Card containerStyle={styles.container}>
                        <HowToRegister />
                    </Card>
                )
            case "Board Locator":
                return <BoardLocator />
            case "How to Vote":
                return (
                    <Card containerStyle={styles.container}>
                        <HowToVote />
                    </Card>
                )
            default:
                return <Text>Make a Selection Above</Text>
        }
    }



    return (
        conditionalRender()
    )
}


export default InfoCard
