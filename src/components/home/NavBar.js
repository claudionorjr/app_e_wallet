import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBarcode, faExternalLinkAlt, faSignOutAlt, faDollarSign } from '@fortawesome/free-solid-svg-icons'


/**
 * @class NavBar
 * 
 * @description: .
 * 
 * @author Claudionor Silva <claudionor.junior1994@gmail.com>
 * @version 1.0.0
 */
export default class NavBar extends React.Component {

  render() {
    return (
      <View style={[styles.headHome, styles.shadow]}>
        <View style={styles.accountDaties}>
          <Text style={{fontSize: 12}}>Nome: Claudionor Silva</Text>
          <Text style={{fontSize: 12}}>Conta: 165879-5</Text>
          <Text style={{fontSize: 12}}>Agência: 0001</Text>
        </View> 
        <View style={styles.singOut}>
        <TouchableOpacity onPress={() => {}}>
            <FontAwesomeIcon size={25} icon={ faSignOutAlt } />
        </TouchableOpacity>
        </View>
        <View style={styles.amount}>
          <Text style={{fontSize: 32, fontStyle: "italic"}}>
            <FontAwesomeIcon size={22} icon={ faDollarSign } /> 654,45
          </Text>
        </View>
        {this.props.type == 'Statement' ? (<View style={styles.options}>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Transfer')
          }}>
            <FontAwesomeIcon size={50} icon={ faExternalLinkAlt } />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Pay')
          }}>
            <FontAwesomeIcon size={60} icon={ faBarcode } />
          </TouchableOpacity>
        </View>) : <Text>Teste</Text>}
      </View>
    )
  }
}