import * as React from 'react'
import {connect} from "react-redux";
import {bindActionCreators} from "redux"
import { withRouter } from 'react-router'
require('./UserButton.scss')

interface UserButtonComponentProps{
  open:any
}

class UserButtonComponent extends React.Component<UserButtonComponentProps, {}>{
  constructor(props) {
    super(props);
  }
    
  render(){
    return(
      <div className={(this.props.open==true)? "BtnUser1Active":"BtnUser1"}>
        {(this.props.open==true)? <p className="TextUserBtn">Options</p>:""}      
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
  
export const UserButton = connect(mapStateToProps, mapDispatchToProps)(UserButtonComponent)