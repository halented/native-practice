import React, { useState } from 'react'
import { Card } from 'react-native-elements'
import { Text, ScrollView, Linking, Button } from 'react-native'
import OhioIDCard from './SpecificVoters/OhioIDCard'
import MilitaryVoter from './SpecificVoters/MilitaryVoter'
import UnshelteredVoter from './SpecificVoters/UnshelteredVoter'
import RegistrationInfoIncorrect from './SpecificVoters/RegistrationInfoIncorrect'
import IncarceratedVoter from './SpecificVoters/IncarceratedVoter'
import { styles } from '../styles'

function HowToRegister() {
    const [showSpecific, setShowSpecific] = useState(false)
    const [scenario, setScenario] = useState("")

    const renderBasicInstructions = () => {
        return (
            <>
                <Text>You must register to vote <Text style={{ color: "black", fontStyle: 'italic', textDecorationLine: 'underline' }}>no less than 30 days prior to an election</Text> in order to be eligible to vote in that election. </Text>
                <Text>{" "}</Text>
                <Card.Divider />
                <Text>First, find out if you have registered before at
                    <Text style={styles.link}
                        onPress={() => Linking.openURL('https://voterlookup.ohiosos.gov/voterlookup.aspx')}>
                        {" "}Ohio's Voter Lookup.
                    </Text>
                    {" "}If you have, you are set to vote. You will need to locate your correct polling location using the
                    <Text style={styles.link}
                        onPress={() => Linking.openURL('https://www.sos.state.oh.us/elections/voters/toolkit/polling-location/')}>
                        {" "}Ohio Polling Location Tool.
                    </Text>
                </Text>
                <Text>{" "}</Text>
                <Card.Divider />
                <Text>If not, you will need to register. You may begin your registration online at
                    <Text style={styles.link}
                        onPress={() => Linking.openURL('https://olvr.ohiosos.gov/')}>
                        {" "}Ohio's Registration Portal.
                    </Text>
                    {" "}Note that the online portal requires an{" "}
                    <Text style={{ fontWeight: 'bold' }}>Ohio ID (be that a non-expired Ohio ID Card or Driver's License), your full name, date of birth, residential address, and Social Security Number.</Text>
                </Text>
                <Text>{" "}</Text>
                <Card.Divider />
                <Text style={{ textAlign: 'center' }}>
                    For resources on specific voter scenarios, please select applicable link below:
                </Text>
                <Text style={{ textAlign: 'center' }}>
                    {buttons()}
                </Text>
            </>
        )
    }

    const renderSpecificScenarioInstructions = () => {
        switch (scenario) {
            case "license":
                return <OhioIDCard goBack={goBack} />
            case "military":
                return <MilitaryVoter goBack={goBack} />
            case "unsheltered":
                return <UnshelteredVoter goBack={goBack} />
            case "registration":
                return <RegistrationInfoIncorrect goBack={goBack} />
            case "incarceration":
                return <IncarceratedVoter goBack={goBack} />
            default:
                return buttons()
        }
    }

    const goBack = () => {
        setShowSpecific(false)
    }

    const buttonBuilder = (type) => {
        let title
        switch (type) {
            case "license":
                title = "No Ohio ID/License"
                break
            case "military":
                title = "Military/Overseas"
                break
            case "unsheltered":
                title = "Unsheltered Citizens"
                break
            case "registration":
                title = "Registration is Incorrect"
                break
            case "incarceration":
                title = "Incarceration"
                break
            default:
                title = "Unknown"
        }
        return (
            <>
                <Text>{" "}</Text>
                <Button
                    key={type}
                    title={title}
                    onPress={() => {
                        setShowSpecific(true)
                        setScenario(type)
                    }} />
            </>
        )
    }

    const buttons = () => {
        const types = ["license", "military", "unsheltered", "registration", "incarceration"]
        return (
            <ScrollView>
                {types.map(type => buttonBuilder(type))}
            </ScrollView>
        )
    }

    return (
        <ScrollView>
            {showSpecific ?
                renderSpecificScenarioInstructions()
                :
                renderBasicInstructions()
            }
        </ScrollView>
    )
}

export default HowToRegister