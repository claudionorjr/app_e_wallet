import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './styles'


/**
 * @class Transfer
 * 
 * @description: .
 * 
 * @author Claudionor Silva <claudionor.junior1994@gmail.com>
 * @version 1.0.0
 */
export default class Transfer extends React.Component {

  render() {
    return (
      <>
        <View style={styles.transferArea}>
          <View style={{flexDirection: "column"}}>
            <Text style={{marginLeft: 10}}>Código do Banco</Text>
            <TextInput style={[styles.input, styles.shadow]} returnKeyLabel='teste' placeholder="Código...">

            </TextInput>
            <Text style={{marginLeft: 10}}>Agência sem Dígito</Text>
            <TextInput style={[styles.input, styles.shadow]} placeholder="Agência...">
            
            </TextInput>
            <Text style={{marginLeft: 10}}>Conta sem Dígito</Text>
            <TextInput style={[styles.input, styles.shadow]} placeholder="Conta...">
              
            </TextInput>
          </View>
          <View style={{flexDirection: "column"}}>
              <Text style={{marginLeft: 10}}>Nome do Recebedor</Text>
              <TextInput style={[styles.input, styles.shadow]} placeholder="Nome...">
                
              </TextInput>
            <Text style={{marginLeft: 10}}>CPF do Recebedor</Text>
            <TextInput style={[styles.input, styles.shadow]} placeholder="CPF...">
              
            </TextInput>
            <Text style={{marginLeft: 10}}>Valor</Text>
            <TextInput style={[styles.input, styles.shadow]} placeholder="Valor...">
              
            </TextInput>
          </View>
        </View>
        <View style={styles.btnArea}>
          <TouchableOpacity style={[styles.btn, styles.shadow]} onPress={() => {}}>
            <Text>TRANSFERIR</Text>
          </TouchableOpacity>
        </View>
      </>
    )
  }
}
