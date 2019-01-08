import * as React from 'react';
import { Link } from 'react-router-dom'
import AuthWindow from "./auth.window"
require('./style.scss')

class RightHalfScreen extends React.Component<{}> {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="right-screen">
          <AuthWindow/>
      </div>
    )
  }  
}

export default RightHalfScreen