import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Statement from '../statement/Statement'
import Transfer from '../transfer/Transfer'
import Pay from '../pay/Pay'

const Stack = createStackNavigator();

/**
 * @class Home
 * 
 * @description: .
 * 
 * @author Claudionor Silva <claudionor.junior1994@gmail.com>
 * @version 1.0.0
 */
export default class Home extends React.Component {

  render() {
    return (
      <>
        <NavigationContainer >
          <Stack.Navigator initialRouteName="Statement" screenOptions={{
            headerShown: false
          }}>
              <Stack.Screen name="Statement" component={Statement} />
              <Stack.Screen name="Pay" component={Pay} />
              <Stack.Screen name="Transfer" component={Transfer} />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    )
  }
}
