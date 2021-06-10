import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import Category from '../components/Category'
import Screen from '../components/Screen'
import Colors from '../config/colors'

const ebooksData = [
    {
        id: 1,
        title: "js",
        image: require("../assets/algo.png")
    },
    {
        id: 2,
        title: "algo",
        image: require("../assets/cpp.png")
    },
    {
        id: 3,
        title: "php",
        image: require("../assets/cpp.png")
    },
    {
        id: 4,
        title: "java",
        image: require("../assets/c.png")
    },
    {
        id: 5,
        title: "Javafirecript",
        image: require("../assets/cpp.png")
    },
    {
        id: 6,
        title: "base",
        image: require("../assets/ruby.png")
    },
    {
        id: 8,
        title: "haskel",
        image: require("../assets/php.png")
    },
    {
        id: 9,
        title: "haskel",
        image: require("../assets/pi.png")
    },
    {
        id: 10,
        title: "haskel",
        image: require("../assets/matlab.png")
    },
    {
        id: 11,
        title: "haskel",
        image: require("../assets/db.png")
    },
    {
        id: 12,
        title: "haskel",
        image: require("../assets/ios.png")
    },
    {
        id: 13,
        title: "haskel",
        image: require("../assets/android.png")
    },
]

export default function EbooksCategoryScreen() {
    return (
        <Screen style={styles.container}>
            <FlatList
                data={ebooksData}
                numColumns={2}
                keyExtractor={ebook => ebook.id.toString()}
                renderItem={({ item }) => (
                    <Category
                        title={item.title}
                        image={item.image}
                    />
                )}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        // backgroundColor: Colors.medium
    }
})