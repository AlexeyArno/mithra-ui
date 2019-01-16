import * as React from "react";
import { Link } from "react-router-dom";
import AuthWindow from "./auth.window"
require("./style.scss");

const imageURL: string = `https://images.pexels.com/photos/1080854/
  pexels-photo-1080854.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`;

class SignIn extends React.Component<{ClickIn}> {
  constructor(props) {
    super(props);
  }

  public render() {
    return(
      <div className="sign-in" >
        <AuthWindow ClickIn={this.props.ClickIn}/>    
      </div>
    );
  }
}

export default SignIn;
