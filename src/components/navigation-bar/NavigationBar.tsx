import * as React from 'react'
import User from './User/User'
import {UserButton} from "./user-button/UserButton"
import {TrendButton} from './trend-button/TrendButton'
import {FollowersButton} from './followers-button/FollowersButton'
import {MessageButton} from './message-button/MessageButton'
import {SearchButton} from './search-button/SearchButton'
import {SettingsButton} from './settings-button/SettingsButton'
import {ArrBtn} from './arrow-button/ArrBtn'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import { withRouter } from 'react-router'

require('./NavigationBar.scss')

interface NavBarComponentProps{
  open: any
}

class NavBarComponent extends React.Component<NavBarComponentProps, {}>{
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div  className={(this.props.open==false)? "ContainerBtn":"ContainerBtnActive" }>

        <div className="UserProf">
          <User/>
          <UserButton/>
        </div>

        <div className="NavBtn">
          <TrendButton/>
          <FollowersButton/>
          <MessageButton/>
          <SearchButton/>
          <SettingsButton/>
        </div>

        <div className="BackBtn">
          <ArrBtn/>
        </div>

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

export const NavBar = connect(mapStateToProps, mapDispatchToProps)(NavBarComponent)

