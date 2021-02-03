import React, { useState } from 'react'
import { Card } from 'react-native-elements'
import { Text, ScrollView, Linking, Button } from 'react-native'
import OhioIDCard from './SpecificVoters/OhioIDCard'
import MilitaryVoter from './SpecificVoters/MilitaryVoter'
import UnshelteredVoter from './SpecificVoters/UnshelteredVoter'

function HowToRegister() {
    const [showSpecific, setShowSpecific] = useState(false)
    const [scenario, setScenario] = useState("")

    const renderSpecificScenarioInstructions = () => {
        switch (scenario) {
            case "license":
                return <OhioIDCard goBack={goBack}/>
            case "military":
                return <MilitaryVoter goBack={goBack}/>
            case "unsheltered":
                return <UnshelteredVoter goBack={goBack}/>
            default:
                return buttons()
        }
    }

    const goBack = () => {
        setShowSpecific(false)
    }

    const buttons = () => {
        return (
            <ScrollView>
                <Text>{" "}</Text>
                <Button
                    title="No Ohio ID/License"
                    onPress={() => {
                        setShowSpecific(true)
                        setScenario("license")
                    }} />
                <Text>{" "}</Text>
                <Button
                    title="Military/Veteran"
                    onPress={() => {
                        setShowSpecific(true)
                        setScenario("military")
                    }} />
                <Text>{" "}</Text>
                <Button
                    title="Unsheltered Citizens"
                    onPress={() => {
                        setShowSpecific(true)
                        setScenario("unsheltered")
                    }} />
            </ScrollView>
        )
    }
    return (
        <ScrollView>
            <Text>First, find out if you have registered before at
                <Text style={{ color: 'rgb(32, 137, 220)' }}
                    onPress={() => Linking.openURL('https://voterlookup.ohiosos.gov/voterlookup.aspx')}>
                    {" "}Ohio's Voter Lookup.
                </Text>
                {" "}If you have, you are set to vote. You will need to locate your correct polling location using the
                <Text style={{ color: 'rgb(32, 137, 220)' }}
                    onPress={() => Linking.openURL('https://www.sos.state.oh.us/elections/voters/toolkit/polling-location/')}>
                    {" "}Ohio Polling Location Tool.
                </Text>
            </Text>
            <Text>{" "}</Text>
            <Card.Divider />
            <Text>If not, you will need to register. You may begin your registration online at
                <Text style={{ color: 'rgb(32, 137, 220)' }}
                    onPress={() => Linking.openURL('https://olvr.ohiosos.gov/')}>
                    {" "}Ohio's Registration Portal.
                </Text>
                {" "}Note that the online portal requires an <Text style={{ fontWeight: 'bold' }}>Ohio ID (be that a non-expired Ohio ID card or Driver's License), your full name, date of birth, residential address, and Social Security Number.</Text>
            </Text>
            <Text>{" "}</Text>
            <Card.Divider />
            <Text style={{ textAlign: 'center' }}>
                For resources on specific voter scenarios, please select applicable link below:
            </Text>
            <Text style={{ textAlign: 'center' }}>
                {showSpecific ?
                    renderSpecificScenarioInstructions()
                    :
                    buttons()
                }
            </Text>
        </ScrollView>
    )
}

export default HowToRegister