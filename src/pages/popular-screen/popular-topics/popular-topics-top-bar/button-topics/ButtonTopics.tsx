import * as React from 'react';
import { Link } from 'react-router-dom'

require('./ButtonTopics.scss')

class ButtonTopics extends React.Component{
  render(){
    let txt="Open All Topics"
    return(
      <div className="ButtonTopicsStyle">
        <div className="ButtonTopics_text">
          {txt}
        </div>
      </div>    
    )
  }
}

export default ButtonTopics