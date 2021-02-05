import React from 'react'
import { Text, Button, ScrollView, Linking } from 'react-native'
import { styles } from '../../styles'
import { Card } from 'react-native-elements'

function RegistrationInfoIncorrect(props) {
    return (
        <ScrollView>
            <Text style={styles.sectionHeader}>How to Correct Registration Info</Text>
            <Text>{" "}</Text>
            <Card.Divider />
            <Text>If you find that you are registered but <Text style={{ fontStyle: 'italic' }}>any part</Text> of your information is incorrect, such as a change of surname, misspelling of any items, or incorrect street direction, you will need to fill out a physical form and deliver it to your local board of elections, either by mail or in person. Note that the board of elections does not account for time spent correcting registration information. If you need to correct it, do so as early as possible. Once the board of elections they will either correct your information or determine that the form is incomplete. You will receive notice in either case. According to the Ohio Secretary of State, "If your valid change of name and/or address form is received or postmarked by the voter registration deadline, then you will be eligible to vote a regular (rather than a provisional) ballot at that election."</Text>
            <Text>{" "}</Text>
            <Card.Divider />
            <Text><Text style={styles.link}
                onPress={() => Linking.openURL('https://www.ohiosos.gov/globalassets/elections/forms/vr_form_04-2015.pdf')}>CLICK HERE </Text>to view/print the PDF form. If you do not have access to a printer, your local library may have the necessary facilities to print it for you.</Text>
            <Text>{" "}</Text>
            <Card.Divider />
            <Text>
                A provisional ballot may be cast at the polling place if your name changes during the 28 days before an election, but <Text style={{ fontWeight: 'bold' }}>provisional ballots should be avoided as much as possible, </Text><Text style={styles.link} onPress={() => Linking.openURL('https://www.eac.gov/sites/default/files/document_library/files/EAVSDeepDive_provisionalballot.pdf')}>being the most likely ballot to be rejected/not counted.</Text> According to the Ohio Secretary of State, "If you are already registered to vote but have changed your name after the voter registration deadline, you may appear at your polling location on Election Day, provide proof of legal name change, complete SOS-prescribed form 10-L and cast a regular ballot." The 10-L form would be provided to you at the polling location on the day of the election in that case; you would not need to make prior arrangements for it nor print the form out. You may view a preview of the form from <Text style={styles.link} onPress={()=>Linking.openURL('https://www.ohiosos.gov/globalassets/elections/forms/10-l.pdf')}>HERE</Text>.
            </Text>
            <Text>{" "}</Text>
            <Text>
                <Text>Below is a summary of valid ID's in Ohio: </Text>
                <Text>{"\n"}</Text>
                <Text>{"\n"}</Text>
                <Text>{" "}</Text>
                <ScrollView>
                    <Text>1. Government-issued photo ID*</Text>
                    <Text>2. Valid military ID cards</Text>
                    <Text>3. Utility bill</Text>
                    <Text>4. Bank statement</Text>
                    <Text>5. Government check</Text>
                    <Text>6. Paycheck</Text>
                </ScrollView>
                <Text>{"\n"}</Text>
                <Text style={{fontStyle: 'italic'}}>*If using a Government ID, it must have a valid expiration date, the voter's name, photo, and address.</Text>
                <Text>{"\n"}</Text>
                <Text>{"\n"}</Text>
                <Text>
                    Note that IDs from out of state, social security cards, passports, birth cirtificates, insurance cards, or notices from the board of elections <Text style={{ fontWeight: 'bold' }}>are not valid proof of legal name.</Text>
                </Text>
                <Text>{" "}</Text>
                For more detail on the above summarized forms of ID, please visit <Text style={styles.link} onPress={() => Linking.openURL('https://www.ohiosos.gov/elections/voters/id-requirements/')}>THIS SITE</Text>.
            </Text>
            <Text>{" "}</Text>
            <Card.Divider />
            <Text>The SOS website contains information on submitting registration changes<Text style={styles.link} onPress={() => Linking.openURL('https://www.ohiosos.gov/elections/voters/register/#obligations')}> HERE</Text>.</Text>
            <Text>{" "}</Text>
            <Button title='Go Back' onPress={props.goBack} />
        </ScrollView>
    )
}

export default RegistrationInfoIncorrect
