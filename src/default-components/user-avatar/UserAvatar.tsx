import * as React from 'react'
import { withRouter } from 'react-router'

require('./UserAvatar.scss')

interface UserAvatarProps{
  open: any
}

export class UserAvatar extends React.Component<UserAvatarProps, {}>{
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
