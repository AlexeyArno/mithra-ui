import * as React from 'react'
import ArrbtnPic from './ArrBtnPic/ArrbtnPic'
import {connect} from "react-redux";
import {bindActionCreators} from "redux"
import {changeLeftBarState} from 'src/actions/left-bar'
import {withRouter} from 'react-router-dom'

require('./ArrBtn.scss')

interface ArrBtnComp {
  changeLeftBarState:Function,
  open:boolean
}

class ArrBtnComponent extends React.Component<ArrBtnComp, {}>{
  constructor(props) {
    super(props);
    this.click = this.click.bind(this)
  }

  click(){
    this.props.changeLeftBarState()
  } 

  render(){
    return(
      <div className="ArrBtn" onClick={this.click}>
        <ArrbtnPic/>    
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
  bindActionCreators({changeLeftBarState}, dispatch);
  
export const ArrBtn = connect(mapStateToProps, mapDispatchToProps)(ArrBtnComponent)

