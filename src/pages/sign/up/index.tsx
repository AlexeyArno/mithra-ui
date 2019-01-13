import * as React from "react";
import { Link } from "react-router-dom";
import AuthWindow from "./auth.window";
require("./style.scss")

class SignUp extends React.Component<{}> {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="sign-up">
        <AuthWindow/>
      </div>
    )
  }  
}

export default SignUp
