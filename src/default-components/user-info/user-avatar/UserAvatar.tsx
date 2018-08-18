import * as React from 'react'
import {connect} from "react-redux";
import {bindActionCreators} from "redux"
import { withRouter } from 'react-router'

require('./UserName.scss')

interface UserNameComponentProps{
  open: any
}

class UserAvatar extends React.Component<UserNameComponentProps, {}>{
  constructor(props) {
    super(props);
  }

  render(){
    return(
        <div  className="UserAvatarStyle">

        </div>
    )
  }
}

export default UserAvatar