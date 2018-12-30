import * as React from "react";
import { observer, inject } from "mobx-react";
require("./styles.scss");

interface IPlayerProps {
  streamName: string;
}

@inject("store")
@observer
export default class Player extends React.Component<IPlayerProps> {
  constructor(props) {
    super(props);
  }
  public render() {
    return(
      <div className="player"> {this.props.streamName} </div>
    );
  }
}
