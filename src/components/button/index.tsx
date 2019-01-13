import * as React from "react";
require("./styles.scss");

interface IButtonProps {
  content: string;
  click: (e: React.MouseEvent) => void;
}

export default class Button extends React.Component<IButtonProps> {
  constructor(props) {
    super(props);
  }
  public render() {
    return(
      <div onClick={this.props.click} className="button">
        {this.props.content}
      </div>
    );
  }
}
