import React, { useRef, useEffect } from 'react'
import { View, Text, StyleSheet, Image, Animated } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons"

import Screen from '../components/Screen'
import AppText from '../components/AppText'
import Colors from '../config/colors'
import { color } from 'react-native-reanimated'

const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

    React.useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            }
        ).start();
    }, [fadeAnim])

    return (
        <Animated.View                 // Special animatable View
            style={{
                ...props.style,
                opacity: fadeAnim,         // Bind opacity to animated value
            }}
        >
            {props.children}
        </Animated.View>
    );
}

export default function AboutScreen() {
    return (
        <Screen style={styles.container}>
            <Image style={styles.image} source={require("../assets/dev.jpg")} />
            <FadeInView style={styles.bottomContainer}>
                <View >

                    <View style={styles.text}>
                        <MaterialCommunityIcons name="code-tags" size={30} />
                        <AppText >Code By: Codebloded</AppText>
                    </View>

                    <View style={styles.text}>
                        <MaterialCommunityIcons name="email" size={30} style={styles.icon} />
                        <AppText >Email: rohanrajput16.phy@gmail.com</AppText>

                    </View>
                    <View style={styles.ratings}>
                        <AppText style={styles.ratText}>If you like this codeEbooks.io Application please take your time to leave positive feedback and a 5-star rating t help us continue improving this application</AppText>
                    </View>
                    <View >
                        <AppText style={styles.credits}>Credits: </AppText>
                        <AppText style={styles.creText}>All Icon used in this Application is under the commercial use and creative common license and can be found on www.freepik.com</AppText>
                    </View>
                </View>
            </FadeInView>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: Colors.white
    },
    bottomContainer: {
        paddingVertical: 10,
        width: "100%",

        borderTopStartRadius: 40,
        borderTopEndRadius: 40,
        backgroundColor: "#faae5c",
        flex: 1,
    },
    credits: {
        fontSize: 18,
        color: Colors.dark
    },
    creText: {
        color: Colors.dark,
        textAlign: "center",
        margin: 10,
    },
    ratings: {

        borderRadius: 15,

        backgroundColor: Colors.white,
        marginHorizontal: 10,
        padding: 10,
        marginBottom: 30,
    },
    ratText: {
        textAlign: "center"
    },
    text: {
        backgroundColor: Colors.white,
        flexDirection: 'row',
        alignItems: "center",
        padding: 5,
        alignSelf: "center",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        marginBottom: 10,
        elevation: 5,
    },
    image: {
        width: 400,
        height: 300,
    }
})