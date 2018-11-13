import * as React from "react";
import ContentTopicsPicture from "./content-topics-picture/ContentTopicsPicture";
import ContentTopicsDescription from "./content-topics-description/ContentTopicsDescription";
require("./ContentTopics.scss")

class ContentTopics extends React.Component {
    
  render(){
    return(
      <div className="wrapper_for_ContentTopicsStyle">
        <div className="ContentTopicsStyle">
          <ContentTopicsPicture/>
          <ContentTopicsDescription/>
        </div>
      </div> 
    )
  }
}

export default ContentTopics