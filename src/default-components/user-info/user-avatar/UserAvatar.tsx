import * as React from 'react'
import {connect} from "react-redux";
import {bindActionCreators} from "redux"
import { withRouter } from 'react-router'

require('./UserAvatar.scss')

interface userAvatarComponentProps{
  open: any
}

class UserAvatar extends React.Component<userAvatarComponentProps, {}>{
  constructor(props) {
    super(props);
  }

  render(){
    return(
        <div  className="userAvatarStyle">

        </div>
    )
  }
}

export default UserAvatar