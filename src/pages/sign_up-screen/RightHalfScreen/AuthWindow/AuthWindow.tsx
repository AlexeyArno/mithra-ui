import * as React from 'react';
import { Link } from 'react-router-dom'
import InputData from "./InputData/InputData"
import SignWith from "./SignWith/SignWith"
require('./AuthWindow.scss')

class AuthWindow extends React.Component<{}> {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="AuthWindow">
        <InputData/>

        <div className="SingBtns">
          <div className="SignUpBtn">
            Sign Up
          </div>
          
          <div className="SignInBtn">
            Sign In
          </div>
        </div>  
        
        <SignWith/>
      </div>
    )
  }  
}

export default AuthWindow