import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

//Navigation
import { createStackNavigator } from "@react-navigation/stack"
import EbooksCategoryScreen from '../screens/EbooksCategoryScreen';
import BooksOfCategory from '../screens/BooksOfCategory';
import Book from '../components/Book';
import BookInfoScreen from '../screens/BookInfoScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../config/colors';
import AboutScreen from '../screens/AboutScreen';

const Stack = createStackNavigator();

export default function FeedNavigation({ navigation }) {
    return (
        <Stack.Navigator headerMode="float">
            <Stack.Screen name="All Books " component={EbooksCategoryScreen} options={{
                headerLeft: () => (
                    <MaterialCommunityIcons style={styles.icon} name="menu" size={30} color={Colors.white}
                        onPress={() => navigation.openDrawer()}
                    />
                ),
                headerStyle: {
                    backgroundColor: "#f59042",
                },
                headerTintColor: Colors.white,
                headerTitleAlign: "center"

            }} />
            <Stack.Screen name="CategoryBooks" component={BooksOfCategory} options={{
                headerStyle: {
                    backgroundColor: "#a195db",
                },
                headerTintColor: Colors.white,
                headerTitleAlign: "center"

            }} />
            <Stack.Screen name="bookInfo" component={BookInfoScreen} options={{
                headerStyle: {
                    backgroundColor: "#3da8ff",
                },
                headerTintColor: Colors.white,
                headerTitleAlign: "center"

            }} />

            <Stack.Screen name="Developer" component={AboutScreen} options={{
                headerShown: false
            }} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    icon: {
        margin: 10,
    }
})