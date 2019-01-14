import * as React from "react";
import { Link } from "react-router-dom";
import SignIn from "./in";
import SignUp from "./up";
require("./style.scss");



class Sign extends React.Component<{}> {
  constructor(props) {
    super(props);

    this.ClickIn = this.ClickIn.bind(this);
    this.ClickUp = this.ClickUp.bind(this);
  }

  state = {
    galleryMargin: 0
  };

  ClickIn = () => {
    this.setState({
      galleryMargin: "-100vh"
    })
  }

  ClickUp = () => {
    this.setState({
      galleryMargin: !this.state.galleryMargin
    })
  }

  public render() {
    return(
      <div className="sign">
        <div className="sign__wrapper" style={{marginLeft: this.state.galleryMargin}}>
          <SignIn ClickIn={this.ClickIn}/>
          <div className="sign__window"> <div className="sign__window__color"> </div> </div>
          <SignUp ClickUp={this.ClickUp}/>
        </div>
      </div>
    );
  }
}

export default Sign;
