import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import { WebView } from 'react-native-webview';
import {useAssets} from 'expo-asset';
import { readAsStringAsync } from "expo-file-system";
import {useState} from "react";

export default function App() {
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        scalesPageToFit={true}
        onError={event => console.log(event)}
        source={{uri: 'https://pixijs.io/examples/#/demos-basic/container.js'}}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
