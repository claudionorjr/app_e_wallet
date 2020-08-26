import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View } from 'react-native'
import Home from './src/components/home/Home'
import { styles } from './src/styles/Styles'

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <StatusBar style="auto" />
    </View>
  )
}
