import * as React from "react";
import { observer, inject } from "mobx-react";
import {IAppStoreModule} from "src/interfaces/app_state";
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
    const sideClassName  = open ? "sidebar sidebar-open" : "sidebar";
    return(
      <div className={sideClassName}>
        1
      </div>
    );
  }
}

export default SideBar;
