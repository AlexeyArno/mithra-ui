import * as React from 'react';
import { Link } from 'react-router-dom'
import ContentBroadcastPic from "./content-broadcast-pic/ContentBroadcastPic"
import ContentBroadcastText from "./content-broadcast-text/ContentBroadcasText"
require('./ContentBroadcast.scss')

class ContentBroadcast extends React.Component<{}>{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="ContentBroadcastStyle">
        <ContentBroadcastPic/>
        <ContentBroadcastText/>
      </div>  
    )
  }
}

export default ContentBroadcast