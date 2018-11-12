import * as React from 'react'
// import {UserInfo} from './user-info/UserInfo'
// import {UserButton} from "./user-button/UserButton"
// import {TrendButton} from './trend-button/TrendButton'
// import {FollowersButton} from './followers-button/FollowersButton'
// import {MessageButton} from './message-button/MessageButton'
// import {SearchButton} from './search-button/SearchButton'
// import {SettingsButton} from './settings-button/SettingsButton'
import {ArrBtn} from './arrow-button/ArrBtn'

import RootStore from 'src/store'
import { observer, inject } from 'mobx-react'

require('./NavigationBar.scss')

interface NavBarComponentProps{
  store?:RootStore
}

@inject('store')
@observer
export default class NavBar extends React.Component<NavBarComponentProps, {}>{
  constructor(props) {
    super(props);
  }

  render(){
    console.log(this.props.store)
    return(
      <div  className={(!this.props.store.appStore.leftBarState) ? "ContainerBtn":"ContainerBtnActive" }>

        <div className="UserProf">
          {/* <UserInfo/>
          <UserButton/> */}
        </div>

        <div className="NavBtn">
          {/* <TrendButton/>
          <FollowersButton/>
          {/* <MessageButton/>
          <SearchButton/>
          <SettingsButton/> */}
        </div>

        <div className="BackBtn">
          <ArrBtn/>
        </div>

      </div>
    )
  }
}