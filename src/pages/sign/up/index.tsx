import * as React from "react";
import { Link } from "react-router-dom";
import AuthWindow from "./auth.window";
require("./style.scss")

class SignUp extends React.Component<{ClickUp}> {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="sign-up">
        <AuthWindow ClickUp={this.props.ClickUp}/>
      </div>
    )
  }  
}

export default SignUp
