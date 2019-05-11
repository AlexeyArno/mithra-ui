import * as React from "react";
import { Link } from "react-router-dom";
import InputData from "./input.data";
require("./style.scss");

class AuthWindow extends React.Component<{ClickIn}> {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="auth">
        <InputData/>

        {/* <div className="auth__btns"> */}
          <div className="auth__btns__in__in" >
            Sign In
          </div>
          
          
        {/* </div>   */}
        <div className="auth__btns__up__in" onClick={this.props.ClickIn}>
            Sign Up
          </div>
      </div>
    )
  }  
}

export default AuthWindow