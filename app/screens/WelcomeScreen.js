import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import AppText from '../components/AppText'
import Screen from '../components/Screen'


export default function WelcomeScreen() {
    return (
        <Screen style={styles.container}>
            <Image source={require('../assets/iconxx.png')} />
            <AppText>Hello world</AppText>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",


    }
})