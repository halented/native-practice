import React from 'react'
import { Card } from 'react-native-elements'
import { Text, Button, ScrollView, Linking } from 'react-native'
import { styles } from '../../styles'

function OhioIDCard(props) {
    return (
        <ScrollView>
            <Text style={styles.sectionHeader}>Obtaining ID</Text>
            <Text>{" "}</Text>
            <Card.Divider />
            <Text>In order to apply for an Ohio ID Card or Driver's License, you must appear in-person at an Ohio licensing agency with proof of the following items:</Text>
            <Text>{" "}</Text>
            <Card.Divider />
            <ScrollView>
                <Text>1. Full legal name</Text>
                <Text>2. Date of Birth</Text>
                <Text>3. Social Security Number (if assigned)</Text>
                <Text>4. Legal presence</Text>
                <Text>5. Ohio Residency</Text>
            </ScrollView>
            <Text>{" "}</Text>
            <Card.Divider />
            <Text>You can learn more information by visiting
                <Text style={styles.link} onPress={() => Linking.openURL('https://www.bmv.ohio.gov/dl-id-card.aspx#gsc.tab=0')}>
                    {" "}Ohio's BMV site.
                </Text>
            </Text>
            <Text><Text style={{ fontStyle: 'italic' }}>Note that the board of elections does not account for time spent applying for an ID Card or Driver's License.</Text>
                {" "}If you need to apply for one of these items before you register, do so as early as possible; at least two weeks prior to the registration deadline itself.</Text>
            <Text>{" "}</Text>
            <Button title='Go Back' onPress={props.goBack} />
        </ScrollView>
    )
}

export default OhioIDCard
