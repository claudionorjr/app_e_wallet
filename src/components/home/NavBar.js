import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBarcode, faExternalLinkAlt, faSignOutAlt, faDollarSign, faHome } from '@fortawesome/free-solid-svg-icons'
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
    return (
      <View style={[styles.headHome, styles.shadow]}>
        <View style={styles.accountDaties}>
          <Text style={{fontSize: 12}}>Nome: {this.props.account.name}</Text>
          <Text style={{fontSize: 12}}>Conta: {this.props.account.accountBank}</Text>
          <Text style={{fontSize: 12}}>Agência: {this.props.account.agency}</Text>
        </View> 
        <View style={styles.singOut}>
          <TouchableOpacity onPress={() => {}}>
              <FontAwesomeIcon size={25} icon={ faSignOutAlt } />
          </TouchableOpacity>
        </View>
        <View style={styles.amount}>
          <Text style={{fontSize: 32, fontStyle: "italic"}}>
            <FontAwesomeIcon size={22} icon={ faDollarSign } /> {this.props.account.amount}
          </Text>
        </View>
        {
        this.props.type == 'Statement' ? 
          (<View style={styles.options}>
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
          </View>) :
        this.props.type == 'Pay' ?
          (<View style={styles.options}>
            <TouchableOpacity onPress={() => {
              this.props.navigation.navigate('Statement')
            }}>
              <FontAwesomeIcon size={60} icon={ faHome } />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              this.props.navigation.navigate('Transfer')
            }}>
              <FontAwesomeIcon size={50} icon={ faExternalLinkAlt } />
            </TouchableOpacity>
          </View>) :
        this.props.type == 'Transfer' ?
          (<View style={styles.options}>
            <TouchableOpacity onPress={() => {
              this.props.navigation.navigate('Statement')
            }}>
              <FontAwesomeIcon size={60} icon={ faHome } />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              this.props.navigation.navigate('Pay')
            }}>
              <FontAwesomeIcon size={60} icon={ faBarcode } />
            </TouchableOpacity>
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
