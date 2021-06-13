import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'


import { db } from '../Backend/firebase'
import Category from '../components/Category'
import Screen from '../components/Screen'
import Colors from '../config/colors'
import ebookStaticData from '../config/ebookStaticData'


export default function EbooksCategoryScreen({ navigation }) {
    const [ebooksData, setBooksData] = useState()
    useEffect(() => {
        fetchData()
    }, []);
    const fetchData = async () => {
        const res = await db.collection('ebooks')
            .get()
            .then((snapShot) => {
                const data = snapShot.docs.map(doc => {
                    const resultSnap = doc.data()
                    setBooksData(resultSnap)
                })
            })
    }
    return (
        <Screen style={styles.container}>
            <FlatList
                data={ebookStaticData}
                numColumns={2}
                keyExtractor={ebook => ebook.id.toString()}
                renderItem={({ item }) => (
                    <Category
                        title={item.titleStatic}
                        image={item.imageStatic}
                        onPress={() => {
                            return navigation.navigate('CategoryBooks', ebooksData.ebooks[item.id][item.titleStatic])
                        }}
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
        backgroundColor: Colors.white
    }
})