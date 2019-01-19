import * as React from "react";
import { Link } from "react-router-dom";
require("./style.scss");

class InputData extends React.Component<{}> {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="input-data">
        <p className="input-data__text__auth"> Create your account </p>
        <input type="login" placeholder="Email or login" name="login" />
        <input type="password" placeholder="Password" name="psw" />
      </div>
    )
  }  
}

export default InputData