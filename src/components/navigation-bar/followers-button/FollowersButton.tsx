import * as React from "react";
import FollowersPic from "./FollowersPic/FollowersPic";
// import {connect} from "react-redux";
// import {bindActionCreators} from "redux"

require("./FollowersButton.scss");

import RootStore from "src/store";
import { observer, inject } from "mobx-react";

interface IFollowersButtonProps {
  store?: RootStore;
}

@inject("store")
@observer
export class FollowersButton extends React.Component<IFollowersButtonProps, {}> {
  constructor(props) {
    super(props);
  }

  public render() {
    // console.log(this.props.open)
    return(
      <div className="FllwrsBtn">
        {(this.props.store.appStore.leftBarState) ? <div className="TextFollowers">Followed</div> : <FollowersPic/>}
      </div>
    );
  }
}
