import * as React from 'react';
import { Link } from 'react-router-dom'

require('./ButtonTopics.scss')

class ButtonTopics extends React.Component{
  render(){
    return(
      <div className="ButtonTopicsStyle">
        <a className="ButtonTopics_text">
          Open All Topics
        </a>
      </div>    
    )
  }
}

export default ButtonTopics