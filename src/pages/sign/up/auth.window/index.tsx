import * as React from "react";
import { Link } from "react-router-dom";
import InputData from "./input.data";
import SignWith from "./sign-with";
require("./style.scss");

class AuthWindow extends React.Component<{ClickUp}> {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="auth">
        <InputData/>

        {/* <div className="auth__btns"> */}
          <div className="auth__btns__up__up" >
            Sign Up
          </div>
          
          <div className="auth__btns__in__up" onClick={this.props.ClickUp}>
            Sign In
          </div>
        {/* </div>   */}
      </div>
    )
  }  
}

export default AuthWindow