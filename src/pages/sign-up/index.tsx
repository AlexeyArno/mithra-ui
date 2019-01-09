import * as React from 'react';
import { Link } from 'react-router-dom'
import LeftHalfScreen from "./left.part"
import RightHalfScreen from "./right.part"
require('./style.scss')

class SignUp extends React.Component<{}> {
  constructor(props){
    super(props)
  }

  render(){
    return(
    // <div className="wrapper">
      <div className="sign-up">
        <LeftHalfScreen/>
        <RightHalfScreen/>
        </div>
        // </div>
    )
  }  
}

export default SignUp