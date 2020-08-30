import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import NavBar from '../home/NavBar'


/**
 * @class Deposit
 * 
 * @description: .
 * 
 * @author Claudionor Silva <claudionor.junior1994@gmail.com>
 * @version 1.0.0
 */
export default class Deposit extends React.Component {

  render() {
    return (
      <>
        <NavBar navigation={this.props.navigation} type={'Deposit'}/>
        <View style={styles.depositArea}>
          <>
            <Text style={{marginLeft: 10}}>Valor do depósito</Text>
            <TextInput style={[styles.input, styles.shadow]} returnKeyLabel='teste' placeholder="Valor...">

            </TextInput>
          </>

          <TouchableOpacity style={[styles.btn, styles.shadow]} onPress={() => {}}>
            <Text>DEPOSITAR</Text>
          </TouchableOpacity>
        </View>
      </>
    )
  }
}
