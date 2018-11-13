import * as React from 'react'
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
      <div className="WrapperForBtn">
        <div className={(this.props.open)? "BtnUser1Active":"BtnUser1"}>
          {(this.props.open)? "Options":""}      
        </div>
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