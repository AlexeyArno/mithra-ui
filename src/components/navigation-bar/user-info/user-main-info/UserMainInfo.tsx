import * as React from 'react'
import {UserAvatar} from "src/default-components/user-avatar/UserAvatar"
import {connect} from "react-redux"
import {UserName} from "./user-name/UserName"
import {UserProfession} from "./user-profession/UserProfession"
import {bindActionCreators} from "redux"
import { withRouter } from 'react-router'

require('./UserMainInfo.scss')

interface UserMainInfoProps{
  open: any
}

class UserMainInfoComponent extends React.Component<UserMainInfoProps, {}>{
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className="UserMainInfoWrapper">
        <div className="UserMainInfo" >
          <UserName/>
          <UserProfession/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state:any, ownProps:any) =>{
    return {
      open: state.leftBarStateReducer.leftBarIsOpen,
      ...ownProps
    }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({}, dispatch);

export const UserMainInfo = connect(mapStateToProps, mapDispatchToProps)(UserMainInfoComponent)