import * as React from 'react'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import { withRouter } from 'react-router'

require('./UserName.scss')

interface UserNameProps{
  open: any
}

class UserNameComponent extends React.Component<UserNameProps, {}>{
  constructor(props) {
    super(props);
  }

  render(){
    let name="Spider Man"
    return(
      <div  className="UserNameStyle" >
        {name}
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

export const UserName = connect(mapStateToProps, mapDispatchToProps)(UserNameComponent)