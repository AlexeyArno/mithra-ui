import * as React from 'react';
import { Link } from 'react-router-dom'
import PopularTopicsTopBar from "./popular-topics-top-bar/PopularTopicsTopBar"
import ContentTopics from "./content-topics/ContentTopics"
import ArrBtnPic from "src/components/navigation-bar/arrow-button/ArrBtnPic/ArrBtnPic"
require('./PopularTopics.scss')

class PopularTopics extends React.Component{
    
  render(){
    return(
      <div className="PopularTopicStyle">
        <PopularTopicsTopBar/>
      
        <div className="wrapper_for_contentTopics">
          <div className="ContentTopics_list">
            <ContentTopics/>
            <ContentTopics/>
            <ContentTopics/>
            <ContentTopics/>
            
          </div>

          <div className="button-scroll">
            {/* <ArrBtnPic/> */}
            
          </div>
        </div>
      </div> 
    )
  }
}

export default PopularTopics