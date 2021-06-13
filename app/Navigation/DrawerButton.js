import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { MaterialCommunityIcons } from "@expo/vector-icons"
import AppText from '../components/AppText'
import Colors from '../config/colors'

export default function DrawerButton({ icon, name, onPress }) {
    return (
        <TouchableOpacity importantForAccessibility="yes" style={styles.container} onPress={onPress}>
            <MaterialCommunityIcons name={icon} size={30} color={Colors.medium_sec} />
            <AppText style={styles.text}>{name}</AppText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: "center",
        margin: 10,
    },
    text: {
        fontSize: 15,
        marginHorizontal: 20,
    }
})