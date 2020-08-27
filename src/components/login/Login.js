import React from 'react'
import { View, TextInput, Text, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faWallet } from '@fortawesome/free-solid-svg-icons'
import { styles } from './styles'


/**
 * @class Login
 * 
 * @description: .
 * 
 * @author Claudionor Silva <claudionor.junior1994@gmail.com>
 * @version 1.0.0
 */
export default class Login extends React.Component {

  /**
   * @description: Renderiza a tela de "Login".
   */
  render() {
    return (
      <>
        <View style={[styles.iconLoginArea, styles.shadow]}>
          <FontAwesomeIcon size={120} icon={ faWallet } />
          <Text style={{fontSize: 16}}>Nossa e sua Carteira Digital :D</Text>
          <Text style={{fontSize: 16}}>E-Carteira</Text>
        </View>
        <View style={styles.inputLoginArea}>
          <TextInput style={[styles.input, styles.shadow]} placeholder="E-Mail">

          </TextInput>
          <TextInput style={[styles.input, styles.shadow]} placeholder="Password">
            
          </TextInput>
          <TouchableOpacity style={[styles.btn, styles.shadow]} onPress={() => {
            this.props.navigation.navigate('Home')
          }}>
            <Text>LOGAR</Text>
          </TouchableOpacity>
        </View>
      </>
    )
  }
}
