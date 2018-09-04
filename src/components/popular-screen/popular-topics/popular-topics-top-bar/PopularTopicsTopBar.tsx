import * as React from 'react';
import { Link } from 'react-router-dom'
import ButtonTopics from "./button-topics/ButtonTopics"
import NameTopics from "./name-topics/NameTopics"

require('./PopularTopicsTopBar.scss')

class PopularTopicsTopBar extends React.Component{

  render(){
    return(
      <div className="PopularTopicsTopBarStyle">
        <NameTopics/>
        <ButtonTopics/>
      </div>    
    )
  }
}

export default PopularTopicsTopBar