import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons"

import Screen from '../components/Screen'
import AppText from '../components/AppText'
import Colors from '../config/colors'
export default function AboutScreen() {
    return (
        <Screen style={styles.container}>
            <Image source={require("../assets/iconxx.png")} />
            <View style={styles.text}>
                <MaterialCommunityIcons name="code-tags" size={30} />
                <AppText >Code By: Codebloded</AppText>
            </View>
            <View style={styles.text}>
                <MaterialCommunityIcons name="email" size={30} style={styles.icon} />
                <AppText >Email: rohanrajput16.phy@gmail.com</AppText>

            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    text: {
        backgroundColor: "#e6e8e6",
        flexDirection: 'row',
        alignItems: "center",
        padding: 10,
        alignSelf: "center",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        marginBottom: 10,
        elevation: 10,
    },
})