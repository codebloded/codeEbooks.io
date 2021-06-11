import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import Book from '../components/Book'
import Screen from '../components/Screen'

const booksData = [
    {
        title: "You don't know pJS",
        image: require("../assets/db.png"),
        size: "4.4mb",
        pages: "223"
    },
    {
        title: "You don't knowfg pJS",
        image: require("../assets/db.png"),
        size: "4.4mb",
        pages: "223"
    },
    {
        title: "You don't know dfg JS",
        image: require("../assets/db.png"),
        size: "4.4mb",
        pages: "223"
    },
    {
        title: "You don't know  sdf JS",
        image: require("../assets/db.png"),
        size: "4.4mb",
        pages: "223"
    },
    {
        title: "You don't know w JS",
        image: require("../assets/c.png"),
        size: "4.4mb",
        pages: "223"
    },
]

export default function BooksOfCategory({ route, navigation }) {
    const data = route.params
    console.log(data)
    return (
        <Screen style={styles.container}>
            <FlatList
                data={booksData}
                keyExtractor={book => book.title}
                renderItem={({ item }) => (
                    <Book
                        title={item.title}
                        image={item.image}
                        pages={item.pages}
                        size={item.size}
                        onPress={() => navigation.navigate("bookInfo")}

                    />
                )}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",

    }
})