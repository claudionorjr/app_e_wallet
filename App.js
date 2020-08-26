import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View } from 'react-native'
import Login from './src/components/login/Login'
import { styles } from './src/styles/Styles'

export default function App() {
  return (
    <View style={styles.container}>
      <Login />
      <StatusBar style="auto" />
    </View>
  )
}
