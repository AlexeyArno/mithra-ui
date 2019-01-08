import * as React from 'react';
import { Link } from 'react-router-dom'
require('./style.scss')


class LeftHalfScreen extends React.Component<{}> {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="left-screen">
        <div className="left-screen__text">
          Strengine
        </div>
      </div>
    )
  }  
}

export default LeftHalfScreen