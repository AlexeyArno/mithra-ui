import * as React from "react";
import { observer, inject } from "mobx-react";
require("./styles.scss");

interface IAvatarProps {
  url: string;
}

@inject("store")
@observer
export default class  Avatar extends React.Component<IAvatarProps> {
  constructor(props) {
    super(props);
  }
  public render() {
    return(
      <div className="avatar">
        <img src={this.props.url} alt="avatar"/>
      </div>
    );
  }
}
