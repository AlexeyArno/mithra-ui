import * as React from 'react'
import {connect} from "react-redux";
import {bindActionCreators} from "redux"
import { withRouter } from "react-router"
import UserAvatar from "./user-avatar/UserAvatar"

require("./userInfo.scss")

interface userInfoComponentProps{
  open: any
}

class userInfoComponent extends React.Component<userInfoComponentProps, {}>{
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div  className="userInfoStyle">

        <div className="userInfoBlock1">
          {/* <UserAvatar/> */}
        </div>

        <div className="userInfoBlock2">

        </div>

      </div>
    )
  }
}

export default userInfoComponent