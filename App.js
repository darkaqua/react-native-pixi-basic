import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import { WebView } from 'react-native-webview';
import {useAssets} from 'expo-asset';
import { readAsStringAsync } from "expo-file-system";
import {useState} from "react";

export default function App() {
  
  const PolicyHTML = require('./assets/public/index.html');
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        scalesPageToFit={true}
        onError={event => console.log(event)}
        source={PolicyHTML}
      />
    </SafeAreaView>
  );
}
