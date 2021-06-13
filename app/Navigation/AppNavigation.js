import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
//Navigation
import { createDrawerNavigator } from "@react-navigation/drawer"
import EbooksCategoryScreen from '../screens/EbooksCategoryScreen'
import AboutScreen from '../screens/AboutScreen'
import FeedNavigation from './FeedNavigation'
import DrawerContent from './DrawerContent'

const Drawer = createDrawerNavigator()

export default function AppNavigation(props) {
    return (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="Home" component={FeedNavigation} />

        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {}
})