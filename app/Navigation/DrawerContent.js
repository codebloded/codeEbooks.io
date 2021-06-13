import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Screen from '../components/Screen'
import DrawerButton from './DrawerButton'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import AppText from '../components/AppText'
import Colors from '../config/colors'

export default function DrawerContent(props) {
    return (
        <Screen style={styles.container} {...props} >

            <View>
                <Image style={styles.image} source={require("../assets/bg1.jpg")} />
            </View>
            <View style={styles.container}>

                <DrawerButton name="Downloads" icon="download" />
                <DrawerButton name="Developer" icon="code-tags" onPress={() => props.navigation.navigate("Developer")} />
                <DrawerButton name="Rate" icon="star" />
                <DrawerButton name="Report Bug" icon="bug" />
                <DrawerButton name="Privacy Policy" icon="book-variant" />
            </View>
            <View style={styles.footer}>
                <MaterialCommunityIcons name="code-tags" size={25} color={Colors.medium_sec} />
                <AppText style={styles.text}> : codeblooded</AppText>
            </View>
        </Screen>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        alignSelf: "center",
        width: 280,
        height: 200
    },
    footer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
    },
    text: {
        color: Colors.medium_sec,
        fontSize: 15
    }
})