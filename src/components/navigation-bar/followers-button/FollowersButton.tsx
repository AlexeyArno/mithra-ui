import * as React from 'react'
import FollowersPic from './FollowersPic/FollowersPic'
import {connect} from "react-redux";
import {bindActionCreators} from "redux"

require('./FollowersButton.scss')

interface FollowersBtnComponentProps{
  open: any
}

class FollowersButtonComponent extends React.Component<FollowersBtnComponentProps, {}>{
  constructor(props) {
    super(props);
  }
    
  render(){
    console.log(this.props.open)
    return(
      <div className="FllwrsBtn">
        {(this.props.open==true)? <div className="TextFollowers">Followed</div>: <FollowersPic/>}
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
    
export const FollowersButton = connect(mapStateToProps, mapDispatchToProps)(FollowersButtonComponent)