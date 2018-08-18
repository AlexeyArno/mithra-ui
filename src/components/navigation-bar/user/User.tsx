import * as React from 'react'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import { withRouter } from 'react-router'
require('./User.scss')

class User extends React.Component<{}, {}>{
  constructor(props) {
    super(props);
  }
    
  render(){
    return(
      <div className="User">

      </div>
    )
  }    
}

export default User