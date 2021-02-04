import React from 'react'
import { Text, Button, ScrollView, Linking } from 'react-native'
import { Card } from 'react-native-elements'
import { styles } from '../../styles'

function MilitaryVoter(props) {
    return (
        <ScrollView>
            <Text style={styles.sectionHeader}>Military Voters</Text>
            <Text>{" "}</Text>
            <Card.Divider />
            <Text>If you are deployed in the military you may vote via absentee ballot. Absentee ballots are sent to military automatically starting September 18th.</Text>
            <Text>{" "}</Text>
            <Card.Divider />
            <Text>You must still register to vote. Follow the instructions on the main page for resources and instructions on registration. If your place of residence is in question or you would like clarification on what is a valid address to use, please refer to the
                <Text
                    style={styles.link}
                    onPress={() => Linking.openURL('https://www.ohiosos.gov/elections/voters/voter-eligibility-residency-reqs/')}>
                    {" "}Residency Requirements page
                </Text>
                {" "}on the official State of Ohio website.
            </Text>
            <Text>{" "}</Text>
            <Button title='Go Back' onPress={props.goBack} />
        </ScrollView>
    )
}

export default MilitaryVoter