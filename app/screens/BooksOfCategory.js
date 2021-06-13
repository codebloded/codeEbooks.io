import React, { useEffect } from 'react'
import { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { db } from '../Backend/firebase';
import Book from '../components/Book'
import Screen from '../components/Screen'


export default function BooksOfCategory({ route, navigation }) {
    const booksData = route.params

    return (
        <Screen style={styles.container}>
            <FlatList
                data={booksData}
                keyExtractor={book => book.title}
                renderItem={({ item }) => (
                    <Book
                        title={item.title}
                        image={item.thumbnailUrl}
                        pages={item.pages}
                        size={item.size}
                        onPress={() => navigation.navigate("bookInfo", item)}

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