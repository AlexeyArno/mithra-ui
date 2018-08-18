import * as React from 'react'
import MsgBtnPic from './MsgBtnPic/MsgBtnPic'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import { withRouter } from 'react-router'

require('./MessageButton.scss')

interface MessageButtonProps{
  open: any
}

class MessageButtonComponent extends React.Component<MessageButtonProps, {}>{
  constructor(props) {
    super(props);
  }
    
  render(){
    return(
      <div className="MsgBtn">
        {(this.props.open==true)? <div className="TextMessage">Message</div>:<MsgBtnPic/>}
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
  
export const MessageButton = connect(mapStateToProps, mapDispatchToProps)(MessageButtonComponent)