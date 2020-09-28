import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome, faExternalLinkAlt, faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'
import { styles } from './styles'

const PayIcons = (props) => {
  return (
    <>
      <TouchableOpacity style={styles.column} onPress={() => {
        props.navigation.navigate('Statement')
      }}>
        <FontAwesomeIcon style={styles.column} size={40} icon={faHome} />
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.column} onPress={() => {
        props.navigation.navigate('Transfer')
      }}>
        <FontAwesomeIcon size={40} icon={faExternalLinkAlt} />
        <Text>Transferir</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.column} onPress={() => {
        props.navigation.navigate('Deposit')
      }}>
        <FontAwesomeIcon size={40} icon={faArrowAltCircleDown} />
        <Text>Depositar</Text>
      </TouchableOpacity>
    </>
  )
}

export default PayIcons
