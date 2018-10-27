import * as React from 'react'
import {UserAvatar} from "src/default-components/user-avatar/UserAvatar"
import {UserMainInfo} from "./user-main-info/UserMainInfo"
import { withRouter } from 'react-router'

import RootStore from 'src/store'
import { observer, inject } from 'mobx-react'

require('./UserInfo.scss')

interface UserInfoProps{
  store?: RootStore
}

@inject('store')
@observer
export class UserInfo extends React.Component<UserInfoProps, {}>{
  constructor(props) {
    super(props);
  }

  render(){
    
    return(
      <div  className={(!this.props.store.appStore.leftBarState)? "UserInfo":"UserInfoActive" }>
      
        <UserAvatar open={this.props.store.appStore.leftBarState}/> 

        {(this.props.store.appStore.leftBarState)? <UserMainInfo/>:""} 

      </div>
    )
  }
}

