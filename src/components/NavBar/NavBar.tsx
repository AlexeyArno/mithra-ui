import * as React from 'react'
import User from './User/User'
import BtnUser from './BtnUser/BtnUser'
import TrendBtn from './TrendBtn/TrendBtn';
import FollowersBtn from './FollowersBtn/FollowersBtn'
import MsgBtn from './MsgBtn/MsgBtn'
import SearchBtn from './SearchBtn/SearchBtn'
import SettingsBtn from './SettingsBtn/SettingsBtn'
import {ArrBtn} from './ArrBtn/ArrBtn'
import {connect} from "react-redux";
import {bindActionCreators} from "redux"
import { withRouter } from 'react-router'

require('./NavBar.scss')

interface NavBarComponentProps{
  open: any
}

class NavBarComponent extends React.Component<NavBarComponentProps, {}>{
    constructor(props) {
        super(props);
    }


    render(){
      console.log("open - ", this.props.open)
        return(
            <div className="ContainerBtn">
                {this.props.open?"Open": "Close"}
                <div className="UserProf">
                    <User/>
                    <BtnUser/>
                </div>

                <div className="NavBtn">
                    <TrendBtn/>
                    <FollowersBtn/>
                    <MsgBtn/>
                    <SearchBtn/>
                    <SettingsBtn/>
                </div>

                <div className="BackBtn">
                    <ArrBtn/>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state:any, ownProps:any) =>{
  console.log(state.leftBarStateReducer)
    return {
      open: state.leftBarStateReducer.leftBarIsOpen,
      ...ownProps
    }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({}, dispatch);

export const NavBar = connect(mapStateToProps, mapDispatchToProps)(NavBarComponent)

// export default NavBar