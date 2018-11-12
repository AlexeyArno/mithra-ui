import * as React from 'react';
import { Link } from 'react-router-dom'
require('./ContentTopicsDescription.scss')



class ContentTopicsDescription extends React.Component<{}>{
  constructor(props){
    super(props)
  }  
  render(){

    return(
      <div className="ContentTopicsDescriptionStyle">
        <div className="ContentTopicsDescriptionStyle_left">
          Design
        </div>
        <div className="ContentTopicsDescriptionStyle_right">
          {7777} viewers
        </div>
      </div>    
    )
  }
}

export default ContentTopicsDescription