import * as React from 'react'
import {connect} from "react-redux";
import {bindActionCreators} from "redux"
import { withRouter } from 'react-router'

require('./UserName.scss')

interface userAvatarComponentProps{
  open: any
}

class UserNameComponent extends React.Component<userAvatarComponentProps, {}>{
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div  className="userNameStyle">
        Herr Manelig
      </div>
    )
  }
}

export default UserNameComponent