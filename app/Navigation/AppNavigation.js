import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
//Navigation
import { createDrawerNavigator } from "@react-navigation/drawer"
import EbooksCategoryScreen from '../screens/EbooksCategoryScreen'
import AboutScreen from '../screens/AboutScreen'
import FeedNavigation from './FeedNavigation'

const Drawer = createDrawerNavigator()

export default function AppNavigation() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={FeedNavigation} />
            <Drawer.Screen name="About" component={AboutScreen} />
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {}
})