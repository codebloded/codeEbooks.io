import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { db } from '../Backend/firebase'
import Category from '../components/Category'
import Screen from '../components/Screen'
import Colors from '../config/colors'

const ebooksStatic = [
    {
        id: 0,
        titleStatic: "cpp",
        imageStatic: require("../assets/db.png")
    },
    {
        id: 1,
        titleStatic: "php",
        imageStatic: require("../assets/algo.png")
    },
    {
        id: 2,
        titleStatic: "algo",
        imageStatic: require("../assets/cpp.png")
    },
    {
        id: 3,
        titleStatic: "php",
        imageStatic: require("../assets/c.png")
    },
    {
        id: 4,
        titleStatic: "java",
        imageStatic: require("../assets/c.png")
    },
    {
        id: 5,
        titleStatic: "Javafirecript",
        imageStatic: require("../assets/ruby.png")
    },
    {
        id: 6,
        titleStatic: "base",
        imageStatic: require("../assets/ruby.png")
    },
    {
        id: 8,
        titleStatic: "haskel",
        imageStatic: require("../assets/php.png")
    },
    {
        id: 9,
        titleStatic: "haskel",
        imageStatic: require("../assets/pi.png")
    },
    {
        id: 10,
        titleStatic: "haskel",
        imageStatic: require("../assets/matlab.png")
    },
    {
        id: 11,
        titleStatic: "haskel",
        imageStatic: require("../assets/db.png")
    },
    {
        id: 12,
        titleStatic: "haskel",
        imageStatic: require("../assets/ios.png")
    },
    {
        id: 13,
        titleStatic: "haskel",
        imageStatic: require("../assets/android.png")
    },
]


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
    // const finalData = [...ebooksStatic, ebooksData]
    console.log(ebooksData)

    return (
        <Screen style={styles.container}>
            <FlatList
                data={ebooksStatic}
                numColumns={2}
                keyExtractor={ebook => ebook.id.toString()}
                renderItem={({ item }) => (
                    <Category
                        title={item.titleStatic}
                        image={item.imageStatic}
                        onPress={() => {

                            console.log(ebooksData.ebooks[item.id][item.titleStatic])

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