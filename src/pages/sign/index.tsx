import * as React from "react";
import { Link } from "react-router-dom";
import SignIn from "./in";
import SignUp from "./up";
require("./style.scss");


class Sign extends React.Component<{}> {
  constructor(props) {
    super(props);
  }

  public render() {
    return(
      <div className="sign">
        <div className="sign__wrapper">
          <SignIn/>
          <div className="sign__window"> </div>
          <SignUp/>
        </div>
      </div>
    );
  }
}

export default Sign;
