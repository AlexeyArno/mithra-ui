import * as React from 'react'
import {connect} from "react-redux";
import {bindActionCreators} from "redux"
import { withRouter } from 'react-router'

require('./UserProfession.scss')

interface userProfessionComponentProps{
  open: any
}

class UserProfessionComponent extends React.Component<userProfessionComponentProps, {}>{
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div  className="userProfessionStyle">
       designer
      </div>
    )
  }
}

export default UserProfessionComponent