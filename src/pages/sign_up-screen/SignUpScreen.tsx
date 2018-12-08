import * as React from 'react';
import { Link } from 'react-router-dom'
import LeftHalfScreen from "./LeftHalfScreen/LeftHalfScreen"
import RightHalfScreen from "./RightHalfScreen/RightHalfScreen"
require('./SignUpScreen.scss')

class SignUpScreen extends React.Component<{}> {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="SignUpScreenMain">
        <LeftHalfScreen/>
        <RightHalfScreen/>
      </div>
    )
  }  
}

export default SignUpScreen