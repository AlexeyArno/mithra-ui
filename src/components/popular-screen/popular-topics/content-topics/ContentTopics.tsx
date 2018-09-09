import * as React from 'react';
import { Link } from 'react-router-dom'
import ContentTopicsPicture from "./content-topics-picture/ContentTopicsPicture"
import ContentTopicsDescription from "./content-topics-description/ContentTopicsDescription"
require('./ContentTopics.scss')

class ContentTopics extends React.Component{
    
  render(){
    return(
      <div className="ContentTopicsStyle">
        <ContentTopicsPicture/>
        <ContentTopicsDescription/>
      </div> 
    )
  }
}

export default ContentTopics