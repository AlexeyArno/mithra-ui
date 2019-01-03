import * as React from "react";
import { observer, inject } from "mobx-react";
require("./styles.scss");
const icon: string = require("assets/man-user.svg");

interface IOnlineUsersProps {
  count: number;
}

@inject("store")
@observer
export default class OnlineUsers extends React.Component<IOnlineUsersProps> {
  constructor(props) {
    super(props);
  }
  public render() {
    return(
      <div className="online-users">
        <div  dangerouslySetInnerHTML={{__html: icon}} className="online-users__icon"/>
        <div className="online-users__count">{this.props.count}</div>
      </div>
    );
  }
}
