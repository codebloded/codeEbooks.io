import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from "@react-navigation/native"
import AppNavigation from "./app/Navigation/AppNavigation";
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from "expo-ads-admob"

import { db } from "./app/Backend/firebase"

const playAdd = async () => {
  await AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712'); // Test ID, Replace with your-admob-unit-id
  await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
  await AdMobInterstitial.showAdAsync();
}
export default function App() {
  return (

    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
}

  // <BookInfoScreen title="Raspberry pi 3b wifi automatn" pages={1212} size={23.2} description="Loremdnbf dfddf dfgdjfd fdhfhdjfhdfjdhfdfjdfhdghghhgfjjfhgfg dfgdfhgd fgdhfgjhdfjdbf dgfudfn dfgdufhudfnd fdgufhdf dfgdfhd " />
