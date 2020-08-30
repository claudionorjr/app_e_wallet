import React from 'react'
import { View, TextInput, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faWallet } from '@fortawesome/free-solid-svg-icons'
import { styles } from './styles'
import { validateUser } from '../../requirements/Login/auth'


/**
 * @class Login
 * 
 * @description: .
 * 
 * @author Claudionor Silva <claudionor.junior1994@gmail.com>
 * @version 1.0.0
 */
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {inputLogin: {'email': '', 'password': ''}}
  }

  /**
   * @description: Renderiza a tela de "Login".
   */
  render() {
    return (
      <>
        <View style={[styles.iconLoginArea, styles.shadow]}>
          <FontAwesomeIcon size={80} icon={ faWallet } />
          <Text style={{fontSize: 21, paddingTop: 21, fontWeight: "bold"}}>E-Carteira</Text>
        </View>
        <View style={styles.inputLoginArea}>
          <TextInput style={[styles.input, styles.shadow]}
          onChangeText={(text) => {
                this.setState({inputLogin: {'email': text, 'password': this.state.inputLogin.password}})
          }}
          placeholder="E-Mail"
          value={this.state.inputLogin.email} /> 

          <TextInput style={[styles.input, styles.shadow]}
          onChangeText={(text) => {
                this.setState({inputLogin: {'email': this.state.inputLogin.email, 'password': text}})
          }}
          placeholder="Password"
          value={this.state.inputLogin.password} />
            
          <TouchableOpacity style={[styles.btn, styles.shadow]} onPress={() => {
            const response = validateUser(this.state.inputLogin.email, this.state.inputLogin.password)
            if (response.message == 'authenticated') {
              this.props.dispatch({type: 'login', response: true})
            } else {
              alert('E-mail ou senha incorretos!')
            }
            this.setState({inputLogin: {'email': '', 'password': ''}})
          }}>
            <Text>LOGAR</Text>
          </TouchableOpacity>
        </View>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return { response: state.response }
}

export default connect(mapStateToProps)(Login)
