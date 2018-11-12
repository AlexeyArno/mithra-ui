import * as React from 'react';
import { Link } from 'react-router-dom'
import AuthWindow from "./AuthWindow/AuthWindow"
require('./RightHalfScreen.scss')

class RightHalfScreen extends React.Component<{}> {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="RightHalfScreen">
          <AuthWindow/>
      </div>
    )
  }  
}

export default RightHalfScreen