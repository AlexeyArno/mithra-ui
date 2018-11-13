import * as React from "react";
// import {UserInfo} from './user-info/UserInfo'
// import {UserButton} from "./user-button/UserButton"
// import {TrendButton} from './trend-button/TrendButton'
// import {FollowersButton} from './followers-button/FollowersButton'
// import {MessageButton} from './message-button/MessageButton'
// import {SearchButton} from './search-button/SearchButton'
// import {SettingsButton} from './settings-button/SettingsButton'
import {ArrBtn} from "./arrow-button/ArrBtn";

import { observer, inject } from "mobx-react";

require("./NavigationBar.scss");

interface INavBarComponentProps {
  store?: {appStore: {leftBarState: boolean} };
}

@inject("store")
@observer
export default class NavBar extends React.Component<INavBarComponentProps, {}> {
  constructor(props) {
    super(props);
  }

  // In div "UserProf" -  <UserInfo/>,  <UserButton/>
  // In div NavBtn - <TrendButton/> <FollowersButton/> <MessageButton/> <SearchButton/> <SettingsButton/>
  public render() {
    return(
      <div  className={(!this.props.store.appStore.leftBarState) ? "ContainerBtn" : "ContainerBtnActive"}>

        <div className="UserProf"/>

        <div className="NavBtn"/>

        <div className="BackBtn">
          <ArrBtn/>
        </div>

      </div>
    );
  }
}
