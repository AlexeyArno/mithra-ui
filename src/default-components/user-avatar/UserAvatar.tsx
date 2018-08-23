import * as React from 'react'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import { withRouter } from 'react-router'

require('./UserAvatar.scss')

interface UserAvatarProps{
  open: any
}

class UserAvatarComponent extends React.Component<UserAvatarProps, {}>{
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div  className={(this.props.open==false)? "UserAvatar":"UserAvatar" }>

        

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

export const UserAvatar = connect(mapStateToProps, mapDispatchToProps)(UserAvatarComponent)