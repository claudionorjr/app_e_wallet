import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import StatementIcons from './iconsOptions/StatementIcons'
import PayIcons from './iconsOptions/PayIcons'
import TransferIcons from './iconsOptions/TransferIcons'
import DepositIcons from './iconsOptions/DepositIcons'
import { styles } from './styles'

const NavBar = (props) => {
  return (
    <View style={[styles.headHome, styles.shadow]}>
      <View style={styles.singOut}>
        <TouchableOpacity onPress={() => {
          props.dispatch({ type: 'login', response: false })
        }}>
          <FontAwesomeIcon size={25} icon={faSignOutAlt} />
          <Text style={{ fontSize: 10 }}>Sair</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.accountDaties}>
        <Text style={{ fontSize: 12 }}>Nome: {props.account.name}</Text>
        <Text style={{ fontSize: 12 }}>Conta: {props.account.accountBank}</Text>
        <Text style={{ fontSize: 12 }}>Agência: {props.account.agency}</Text>
      </View>
      <View style={styles.amount}>
        <Text style={{ fontSize: 32, fontWeight: "bold" }}>
          R$ {(Number(props.account.amount)).toFixed(2)}
        </Text>
      </View>
      {
        props.type == 'Statement' ?
          (<View style={styles.options}>
            <StatementIcons navigation={props.navigation} />
          </View>) :
          props.type == 'Pay' ?
            (<View style={styles.options}>
              <PayIcons navigation={props.navigation} />
            </View>) :
            props.type == 'Transfer' ?
              (<View style={styles.options}>
                <TransferIcons navigation={props.navigation} />
              </View>) :
              props.type == 'Deposit' ?
                (<View style={styles.options}>
                  <DepositIcons navigation={props.navigation} />
                </View>) : null
      }
    </View>
  )
}

const mapStateToProps = (state) => {
  return { account: state.account, response: state.response }
}

export default connect(mapStateToProps)(NavBar)
