import * as React from 'react'
import {UserAvatar} from "src/default-components/user-avatar/UserAvatar"
import {connect} from "react-redux"
import {UserMainInfo} from "./user-main-info/UserMainInfo"
import {bindActionCreators} from "redux"
import { withRouter } from 'react-router'

require('./UserInfo.scss')

interface UserInfoProps{
  open: any
}

class UserInfoComponent extends React.Component<UserInfoProps, {}>{
  constructor(props) {
    super(props);
  }

  render(){
    
    return(
      <div  className={(this.props.open==false)? "UserInfo":"UserInfoActive" }>
      
        <UserAvatar/> 
        {(this.props.open==true)? <UserMainInfo/>:""} 

      </div>
    )
  }
}

const mapStateToProps = (state:any, ownProps:any) =>{
//   console.log(state.leftBarStateReducer)
    return {
      open: state.leftBarStateReducer.leftBarIsOpen,
      ...ownProps
    }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({}, dispatch);

export const UserInfo = connect(mapStateToProps, mapDispatchToProps)(UserInfoComponent)