import 'react-native-gesture-handler'
import React from 'react'
import { connect } from 'react-redux'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { faExternalLinkAlt, faBarcode, faArrowAltCircleDown, faUserAlt, faChartBar } from '@fortawesome/free-solid-svg-icons'

import IconNavigation from '../components/IconNavigation'
import Statement from '../screens/Logged/Statement'
import Transfer from '../screens/Logged/Transfer'
import Pay from '../screens/Logged/Pay'
import Deposit from '../screens/Logged/Deposit'
import Account from '../screens/Logged/Account'
import SmallText from '../components/SmallText'
import Colors from '../assets/Colors'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()
const Navigation = () => {
  return (
    <Tab.Navigator initialRouteName="Conta">
      <Tab.Screen name="Extratos" component={Statement} options={{
        tabBarLabel: ({ focused, color }) => focused ?
          (<SmallText color={focused ? Colors.primary : color} text={'Extratos'} />)
          :
          (<SmallText color={focused ? Colors.primary : color} text={'Extratos'} />),
        tabBarIcon: ({ focused, color, size }) => (
          <IconNavigation selected={focused}
            selectedColor={Colors.primary}
            icon={faChartBar}
            NoSelectedColor={color}
            size={size}
          />
        ),
      }} />
      <Tab.Screen name="Pagamento" component={Pay} options={{
        tabBarLabel: ({ focused, color }) => focused ?
          (<SmallText color={focused ? Colors.primary : color} text={'Pagamento'} />)
          :
          (<SmallText color={focused ? Colors.primary : color} text={'Pagamento'} />),
        tabBarIcon: ({ focused, color, size }) => (
          <IconNavigation selected={focused}
            selectedColor={Colors.primary}
            icon={faBarcode}
            NoSelectedColor={color}
            size={size}
          />
        ),
      }} />
      <Tab.Screen name="Conta" component={Account} options={{
        tabBarLabel: ({ focused, color }) => focused ?
          (<SmallText color={focused ? Colors.primary : color} text={'Conta'} />)
          :
          (<SmallText color={focused ? Colors.primary : color} text={'Conta'} />),
        tabBarIcon: ({ focused, color, size }) => (
          <IconNavigation selected={focused}
            selectedColor={Colors.primary}
            icon={faUserAlt}
            NoSelectedColor={color}
            size={size}
          />
        ),
      }} />
      <Tab.Screen name="Transferir" component={Transfer} options={{
        tabBarLabel: ({ focused, color }) => focused ?
          (<SmallText color={focused ? Colors.primary : color} text={'Transferir'} />)
          :
          (<SmallText color={focused ? Colors.primary : color} text={'Transferir'} />),
        tabBarIcon: ({ focused, color, size }) => (
          <IconNavigation selected={focused}
            selectedColor={Colors.primary}
            icon={faExternalLinkAlt}
            NoSelectedColor={color}
            size={size}
          />
        ),
      }} />
      <Tab.Screen name="Deposito" component={Deposit} options={{
        tabBarLabel: ({ focused, color }) => focused ?
          (<SmallText color={focused ? Colors.primary : color} text={'Depósito'} />)
          :
          (<SmallText color={focused ? Colors.primary : color} text={'Depósito'} />),
        tabBarIcon: ({ focused, color, size }) => (
          <IconNavigation selected={focused}
            selectedColor={Colors.primary}
            icon={faArrowAltCircleDown}
            NoSelectedColor={color}
            size={size}
          />
        ),
      }} />
    </Tab.Navigator>
  )
}

const mapStateToProps = (state) => {
  return { response: state.response }
}

export default connect(mapStateToProps)(Navigation)
