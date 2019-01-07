import * as React from "react";
import { observer, inject } from "mobx-react";
require("./styles.scss");
const icon = require("assets/right-arrow.svg");

@inject("store")
@observer
export default class BarButton extends React.Component<{}> {
  constructor(props) {
    super(props);
  }
  public render() {
    return(
      <div dangerouslySetInnerHTML={{__html: icon}} className="bar-button"/>
    );
  }
}
