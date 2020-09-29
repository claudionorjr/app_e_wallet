import 'react-native-gesture-handler'
import React from 'react'
import { connect } from 'react-redux'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../screens/Login'
import TransferConfirmation from '../screens/Logged/Confirmation/TransferConfirmation'
import PaymentConfirmation from '../screens/Logged/Confirmation/PaymentConfirmation'
import DepositConfirmation from '../screens/Logged/Confirmation/DepositConfirmation'

const Stack = createStackNavigator()

const Confirmation = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="SingOut" component={Login} />
          <Stack.Screen name="TransferConfirmation" component={TransferConfirmation} />
          <Stack.Screen name="PaymentConfirmation" component={PaymentConfirmation} />
          <Stack.Screen name="DepositConfirmation" component={DepositConfirmation} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default connect()(Confirmation)
