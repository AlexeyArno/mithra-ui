import * as React from "react";
import { Link } from "react-router-dom";
import LeftHalfScreen from "../sign-up/left.part/index";
import RightHalfScreen from "./right.part/index";
require("./style.scss");

class SignIn extends React.Component<{}> {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="sign-in">
        <RightHalfScreen/>
        <LeftHalfScreen/>
      </div>
    )
  }  
}

export default SignIn