import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome, faArrowAltCircleDown, faBarcode } from '@fortawesome/free-solid-svg-icons'
import { styles } from './styles'

export default class TransferIcons extends React.Component {

  render() {
    return (
      <>
        <TouchableOpacity style={styles.column} onPress={() => {
          this.props.navigation.navigate('Statement')
        }}>
          <FontAwesomeIcon size={40} icon={ faHome } />
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.column} onPress={() => {
          this.props.navigation.navigate('Pay')
        }}>
          <FontAwesomeIcon size={40} icon={ faBarcode } />
          <Text>Pagamento</Text>
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
