import React from 'react'
import NavBar from './NavBar'
import Statement from '../statement/Statement'
import Transfer from '../transfer/Transfer'
import Pay from '../pay/Pay'


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
      <>
        <NavBar />
        <Transfer />
      </>
    )
  }
}
