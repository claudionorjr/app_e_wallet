import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './styles'


/**
 * @class Pay
 * 
 * @description: .
 * 
 * @author Claudionor Silva <claudionor.junior1994@gmail.com>
 * @version 1.0.0
 */
export default class Pay extends React.Component {

  render() {
    return (
      <View style={styles.payArea}>
        <>
          <Text style={{marginLeft: 10}}>Código de Barras</Text>
          <TextInput style={[styles.input, styles.shadow]} returnKeyLabel='teste' placeholder="Código...">

          </TextInput>
        </>

        <TouchableOpacity style={[styles.btn, styles.shadow]} onPress={() => {}}>
          <Text>PAGAR BOLETO</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
