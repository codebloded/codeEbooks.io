import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import colors from '../config/colors'

export default function AppText({ children, style, ...otherProps }) {
    return (
        <Text style={[styles.text, style]}>
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        color: colors.dark,
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    },

})