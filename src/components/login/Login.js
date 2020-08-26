import React from 'react'
import { View, TextInput, Text, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faWallet } from '@fortawesome/free-solid-svg-icons'
import { styles } from '../../styles/Styles'


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
      <View style={styles.container}>
        <View style={styles.iconLoginArea}>
          <FontAwesomeIcon size={160} icon={ faWallet } />
          <Text>Nossa e sua Carteira Digital :D</Text>
          <Text>E-Carteira</Text>
        </View>
        <View style={styles.inputLoginArea}>
          <TextInput style={[styles.input, styles.shadow]} placeholder="E-Mail">

          </TextInput>
          <TextInput style={[styles.input, styles.shadow]} placeholder="Password">
            
          </TextInput>
          <TouchableOpacity style={[styles.btn, styles.shadow]} onPress={() => {}}>
            <Text>LOGAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
