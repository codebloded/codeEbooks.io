import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, TouchableHighlight } from 'react-native'
import Colors from '../config/colors'
import AppText from './AppText'

export default function Category({ title, image, onPress }) {

    return (
        <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
            <View elevation={1} style={styles.container}>
                <Image style={styles.image} source={image} />
                <AppText>{title}</AppText>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 160,
        marginHorizontal: 10,
        marginVertical: 10,
        alignItems: "center",
        padding: 10,
        justifyContent: "center",
        borderRadius: 10,
        backgroundColor: Colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 10,
    },
    image: {
        width: 80,
        height: 80
    }

})