import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableHighlight } from 'react-native'
import Colors from '../config/colors'
import AppText from './AppText'


export default function Book({ title, image, pages, size }) {
    return (

        <TouchableHighlight>

            <View style={styles.container}>
                <Image style={styles.image} source={image} />
                <AppText>{title}</AppText>

                <View style={styles.detailsContainer}>
                    <AppText>Size: {size}</AppText>
                    <AppText>Pages: {pages}</AppText>
                </View>

            </View>
        </TouchableHighlight>

    )
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 400,
        margin: 10,
        borderWidth: 0,
        borderRadius: 10,
        alignItems: "center",
        marginVertical: 10,
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
        width: 200,
        height: 250,
    },
    detailsContainer: {
        marginVertical: 20,
    }

})