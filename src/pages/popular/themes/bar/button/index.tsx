import * as React from "react";
import { observer, inject } from "mobx-react";
require("./styles.scss");
const icon = require("assets/right-arrow.svg");

interface IBarButtonProps {
  click: () => void;
}

@inject("store")
@observer
export default class BarButton extends React.Component<IBarButtonProps> {
  constructor(props) {
    super(props);
  }
  public render() {
    return(
      <div
        dangerouslySetInnerHTML={{__html: icon}}
        className="bar-button"
        onClick={this.props.click}
      />
    );
  }
}
