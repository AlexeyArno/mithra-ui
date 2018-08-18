import * as React from 'react'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import { withRouter } from 'react-router'
require('./UserProfession.scss')

class UserProfession extends React.Component<{}, {}>{
  constructor(props) {
    super(props);
  }
    
  render(){
    return(
      <div className="UserProfession">

      </div>
    )
  }    
}

export default UserProfession