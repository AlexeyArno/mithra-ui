import * as React from 'react';
import { Link } from 'react-router-dom'
import PopularTopicsTopBar from "./popular-topics-top-bar/PopularTopicsTopBar"
import ContentTopics from "./content-topics/ContentTopics"
require('./PopularTopics.scss')

class PopularTopics extends React.Component{
    
  render(){
    return(
      <div className="PopularTopicStyle">
        <PopularTopicsTopBar/>

        <div className="ContentTopics_list">
          <ContentTopics/>
          <ContentTopics/>
          <ContentTopics/>
        </div>
      </div>    
    )
  }
}

export default PopularTopics