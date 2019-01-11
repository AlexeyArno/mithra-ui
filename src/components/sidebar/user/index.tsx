import * as React from "react";
import { observer, inject } from "mobx-react";
import { IUser } from "src/interfaces/app_state";
import Badge from "src/components/badge";
import Avatar from "src/components/avatar";
require("./styles.scss");

interface ISideBarUserProps {
  user: IUser;
  badges: {[key: string]: string};
  open: boolean;
}

@inject("store")
@observer
export default class SideBarUser extends React.Component<ISideBarUserProps> {
  constructor(props) {
    super(props);
  }
  public render() {
    const user: IUser = this.props.user;
    return(
      <div className="side-bar__user">
        <Avatar url={this.props.user.avatar}/>
        <div className={this.props.open ? "side-bar__user__desc" : "side-bar__user__desc_close"}>
          <div>{user.name}</div>
          <div><Badge name={user.badge} badges={this.props.badges}/></div>
        </div>
      </div>
    );
  }
}
