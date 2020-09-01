import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome, faExternalLinkAlt, faBarcode } from '@fortawesome/free-solid-svg-icons'
import { styles } from './styles'


/**
 * @class DepositIcons
 * 
 * @author Claudionor Silva <claudionor.junior1994@gmail.com>
 * @version 1.0.0
 */
export default class DepositIcons extends React.Component {

  /**
   * @description: DepositIcons é utilizado em NavBar.js.
   * 
   * @see src.components.home.NavBar.js
   */
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
          this.props.navigation.navigate('Pay')
          }}>
          <FontAwesomeIcon size={40} icon={ faBarcode } />
          <Text>Pagamento</Text>
        </TouchableOpacity>
      </>
    )
  }
}
