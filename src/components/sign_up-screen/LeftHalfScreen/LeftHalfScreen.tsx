import * as React from 'react';
import { Link } from 'react-router-dom'
require('./LeftHalfScreen.scss')


class LeftHalfScreen extends React.Component<{}> {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="LeftHalfScreen">
        <div className="TextForLeft">
          Strengine
        </div>
      </div>
    )
  }  
}

export default LeftHalfScreen