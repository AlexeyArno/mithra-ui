import * as React from "react";
import { observer, inject } from "mobx-react";
import {IAppStoreModule, IUser} from "src/interfaces/app_state";
import SideBarUser from "./user";
import SideBarMenu from "./menu";
require("./styles.scss");

interface ISideBarProps {
  store?: {
    appStore: IAppStoreModule;
  };
}

@inject("store")
@observer
class SideBar extends React.Component<ISideBarProps> {
  constructor(props) {
    super(props);
  }

  public render() {
    const open: boolean = this.props.store.appStore.leftBarState;
    const user: IUser = this.props.store.appStore.user;
    const badge: {[key: string]: string} = this.props.store.appStore.badges;
    const sideClassName  = open ? "sidebar sidebar-open" : "sidebar";
    return(
      <div className={sideClassName}>
        <SideBarUser user={user} badges={badge} open={open}/>
        <SideBarMenu open={open}/>
      </div>
    );
  }
}

export default SideBar;
