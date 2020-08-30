import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSignOutAlt, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import StatementIcons from './iconsOptions/StatementIcons'
import PayIcons from './iconsOptions/PayIcons'
import TransferIcons from './iconsOptions/TransferIcons'
import DepositIcons from './iconsOptions/DepositIcons'
import { styles } from './styles'


/**
 * @class NavBar
 * 
 * @description: .
 * 
 * @author Claudionor Silva <claudionor.junior1994@gmail.com>
 * @version 1.0.0
 */
class NavBar extends React.Component {

  render() {
    /*
    <View style={styles.accountDaties}>
          <Text style={{fontSize: 12}}>Nome: {this.props.account.name}</Text>
          <Text style={{fontSize: 12}}>Conta: {this.props.account.accountBank}</Text>
          <Text style={{fontSize: 12}}>Agência: {this.props.account.agency}</Text>
        </View> 
     */
    return (
      <View style={[styles.headHome, styles.shadow]}>
        <View style={styles.singOut}>
          <TouchableOpacity onPress={() => {}}>
              <FontAwesomeIcon size={25} icon={ faSignOutAlt } />
              <Text style={{fontSize: 10}}>Sair</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.amount}>
          <Text style={{fontSize: 32, fontWeight: "bold"}}>
            Saldo <FontAwesomeIcon size={22} icon={ faDollarSign } />{this.props.account.amount}
          </Text>
        </View>
        {
        this.props.type == 'Statement' ? 
          (<View style={styles.options}>
            <StatementIcons navigation={this.props.navigation}/>
          </View>) :
        this.props.type == 'Pay' ?
          (<View style={styles.options}>
            <PayIcons navigation={this.props.navigation} />
          </View>) :
        this.props.type == 'Transfer' ?
          (<View style={styles.options}>
            <TransferIcons navigation={this.props.navigation} />
          </View>) :
        this.props.type == 'Deposit' ?
          (<View style={styles.options}>
            <DepositIcons navigation={this.props.navigation} />
          </View>) : null
        }
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return { account: state.account }
}

export default connect(mapStateToProps)(NavBar)
