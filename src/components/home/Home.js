import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../../styles/Styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBarcode, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'


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
      <View>
        <View>
          <View style={styles.accountDaties}>
            <Text>Nome:</Text>
            <Text>Conta:</Text>
            <Text>Agência:</Text>
          </View> 
          <View style={styles.amount}><Text>Saldo:</Text></View>
          <View style={styles.options}>
          <FontAwesomeIcon icon={ faExternalLinkAlt } />
          <FontAwesomeIcon icon={ faBarcode } />
          </View>
        </View>
        <View>

        </View>
      </View>
    )
  }
  /**============================================
   * |   nome           conta           agencia  |
   * |                                           |
   * |                  saldo                    |
   * |                                           |
   * |     transferencia          pagamento      |
   * ============================================
   * |                extrato                    |
   * |                                           |
   * |                                           |
   * |                                           |
   * |                                           |
   * |                                           |
   * |                                           |
   * ============================================
   */
}