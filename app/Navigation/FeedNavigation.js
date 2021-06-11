import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

//Navigation
import { createStackNavigator } from "@react-navigation/stack"
import EbooksCategoryScreen from '../screens/EbooksCategoryScreen';
import BooksOfCategory from '../screens/BooksOfCategory';
import Book from '../components/Book';
import AppNavigation from './AppNavigation';
import BookInfoScreen from '../screens/BookInfoScreen';

const Stack = createStackNavigator();

export default function FeedNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="allBooks" component={EbooksCategoryScreen} />
            <Stack.Screen name="CategoryBooks" component={BooksOfCategory} />
            <Stack.Screen name="bookInfo" component={BookInfoScreen} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {}
})