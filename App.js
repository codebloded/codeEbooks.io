import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Screen from './app/components/Screen';
import BooksOfCategory from './app/screens/BooksOfCategory';
import EbooksCategoryScreen from './app/screens/EbooksCategoryScreen';
import BookInfoScreen from './app/screens/BookInfoScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';



export default function App() {
  return (
    <BookInfoScreen title="Raspberry pi 3b wifi automatn" pages={1212} size={23.2} description="Loremdnbf dfddf dfgdjfd fdhfhdjfhdfjdhfdfjdfhdghghhgfjjfhgfg dfgdfhgd fgdhfgjhdfjdbf dgfudfn dfgdufhudfnd fdgufhdf dfgdfhd " />

  );
}

