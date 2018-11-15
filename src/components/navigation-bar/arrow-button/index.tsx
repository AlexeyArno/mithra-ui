import * as React from "react";
import { observer, inject } from "mobx-react";

require("./styles.scss");
// tslint:disable-next-line
const icon = require("assets/right-arrow.svg");

interface IArrowButtonProps {
  ocstate: boolean;
  callback: () => void;
}

interface IArrowButtonState {
  lbar: boolean;
}

@inject("store")
@observer
export class ArrowButton extends React.Component<IArrowButtonProps, IArrowButtonState> {
  private icon: string;

  constructor(props) {
    super(props);
    this.click = this.click.bind(this);
    this.icon = icon;
  }

  public click() {
    this.props.callback();
  }

  public render() {
    return(
      <div>
        <div
          className={(this.props.ocstate) ? "arrowbutton active" : "arrowbutton"}
          onClick={this.click}
          dangerouslySetInnerHTML={{__html: this.icon}}
        />
      </div>
    );
  }
}
