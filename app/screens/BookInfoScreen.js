import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons"

import Screen from '../components/Screen'
import AppText from '../components/AppText'


export default function BookInfoScreen({ route, description }) {
    const { title,thumbnailUrl, pages, size } = route.params
    return (
        <Screen style={styles.container}>
            <View style={styles.detailsContainer}>
                <Image style={styles.image} source={{uri:thumbnailUrl}} />
                <View style={styles.info}>
                    <AppText>{title}</AppText>
                    <AppText>Size:  {size} MB</AppText>
                    <AppText>Pages:  {pages}</AppText>
                </View>
            </View>
            <View style={styles.description}>
                <AppText style={styles.text}>{description}</AppText>
            </View>
            <View style={styles.icons}>
                <MaterialCommunityIcons name="download-circle" size={60} />
                <MaterialCommunityIcons name="pdf-box" size={60} />
                <MaterialCommunityIcons name="share" size={60} />
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    description: {
        marginHorizontal: 10,
        marginBottom: 20,
    },
    detailsContainer: {
        flexDirection: "row",
        marginBottom: 20,

    },
    text: {
        textAlign: "center",
    },
    info: {
        width: 180,
        alignItems: "center"

    },
    image: {
        width: 200,
        height: 250,
    },
    icons: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
    }

})