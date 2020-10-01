import { connect } from 'react-redux'

const Login = (props) => {
  props.dispatch({ type: 'login', response: true })
}
const mapStateToProps = (state) => {
  return { response: state.response }
}

export default connect(mapStateToProps)(Login)
