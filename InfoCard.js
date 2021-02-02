import React from 'react'
import { Card } from 'react-native-elements'
import { Text, StyleSheet } from 'react-native'

const InfoCard = (props) => {
    
    return (
        <Card containerStyle={styles.container}>
            {
                <Text>{props.selected}</Text>
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