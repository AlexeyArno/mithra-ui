import * as React from 'react';
import { Link } from 'react-router-dom'
require('./InputData.scss')

class InputData extends React.Component<{}> {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="InputData">
        <p className="TextForAuth"> Create your account </p>
        <input type="login" placeholder="Email or login" name="login" />
        <input type="password" placeholder="Password" name="psw" />
      </div>
    )
  }  
}

export default InputData