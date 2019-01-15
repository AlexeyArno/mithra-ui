import * as React from "react";
require("./styles.scss");
const icon = require("assets/right-arrow.svg");

interface IBarButtonProps {
  press: () => void;
  up: () => void;
}

export default class BarButton extends React.Component<IBarButtonProps> {
  constructor(props) {
    super(props);
  }
  public render() {
    return(
      <div
        dangerouslySetInnerHTML={{__html: icon}}
        className="bar-button"
        onMouseDown={this.props.press}
        onMouseUp={this.props.up}
      />
    );
  }
}
