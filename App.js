import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Screen from './app/components/Screen';
import BooksOfCategory from './app/screens/BooksOfCategory';
import EbooksCategoryScreen from './app/screens/EbooksCategoryScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';



export default function App() {
  return (
    <BooksOfCategory />

  );
}

