import * as React from "react";
require("./styles.scss");
const icon = require("assets/heart.svg");

interface ISubscribeProps {
  done: boolean;
  callback: (val: boolean) => void;
}

export default class Subscribe extends React.Component<ISubscribeProps> {
  constructor(props) {
    super(props);
  }
  public render() {
    const className: string = this.props.done ? "unsubscribe" : "subscribe";
    return(
      <div className={className}>
        <div dangerouslySetInnerHTML={{__html: icon}} className={className + "__wrapper"}/>
      </div>
    );
  }
}
