import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome, faExternalLinkAlt, faUser, faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'
import { styles } from './styles'


/**
 * @class StatementIcons
 * 
 * @description: .
 * 
 * @author Claudionor Silva <claudionor.junior1994@gmail.com>
 * @version 1.0.0
 */
export default class StatementIcons extends React.Component {

  render() {
    return (
      <>
        <TouchableOpacity style={styles.column} onPress={() => {
          this.props.navigation.navigate('Statement')
        }}>
          <FontAwesomeIcon style={styles.column} size={40} icon={ faHome } />
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.column} onPress={() => {
          this.props.navigation.navigate('Transfer')
        }}>
          <FontAwesomeIcon size={40} icon={ faExternalLinkAlt } />
          <Text>Transferir</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.column} onPress={() => {
          this.props.navigation.navigate('Deposit')
        }}>
          <FontAwesomeIcon size={40} icon={ faArrowAltCircleDown } />
          <Text>Depositar</Text>
        </TouchableOpacity>
      </>
    )
  }
}