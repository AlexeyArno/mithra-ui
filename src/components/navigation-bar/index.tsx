import * as React from "react";
// import {UserInfo} from './user-info/UserInfo'
// import {UserButton} from "./user-button/UserButton"
// import {TrendButton} from './trend-button/TrendButton'
// import {FollowersButton} from './followers-button/FollowersButton'
// import {MessageButton} from './message-button/MessageButton'
// import {SearchButton} from './search-button/SearchButton'
// import {SettingsButton} from './settings-button/SettingsButton'
import {ArrowButton} from "./arrow-button";

import { observer, inject } from "mobx-react";

require("./styles.scss");

interface INavBarComponentProps {
  store?: {
    appStore: {
      leftBarState: boolean,
      changeLeftBar: () => void};
  };
}

@inject("store")
@observer
export default class NavBar extends React.Component<INavBarComponentProps, {}> {
  constructor(props) {
    super(props);
    this.openCloseBar = this.openCloseBar.bind(this);
  }

  public openCloseBar = () => {this.props.store.appStore.changeLeftBar(); };

  // In div "UserProf" -  <UserInfo/>,  <UserButton/>
  // In div NavBtn - <TrendButton/> <FollowersButton/> <MessageButton/> <SearchButton/> <SettingsButton/>
  public render() {
    const pos: boolean = this.props.store.appStore.leftBarState;
    return(
      <div
        className={(!pos) ? "containerButton" : "containerButton active"}
      >
        <div className="UserProf"/>

        <div className="NavBtn"/>

        <div className="bottom">
          <ArrowButton
            ocstate={this.props.store.appStore.leftBarState}
            callback={this.openCloseBar}
          />
        </div>
      </div>
    );
  }
}
