import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from "@react-navigation/native"
import AppNavigation from './app/Navigation/AppNavigation';




export default function App() {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
}

  // <BookInfoScreen title="Raspberry pi 3b wifi automatn" pages={1212} size={23.2} description="Loremdnbf dfddf dfgdjfd fdhfhdjfhdfjdhfdfjdfhdghghhgfjjfhgfg dfgdfhgd fgdhfgjhdfjdbf dgfudfn dfgdufhudfnd fdgufhdf dfgdfhd " />
