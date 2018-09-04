import * as React from 'react';
import { Link } from 'react-router-dom'
import VideoPlayer from "./video-player/VideoPlayer"
import UserInfoStreamer from "./user-info-streamer/UserInfoStreamer"
import DescriptionVideo from "src/components/popular-screen/container-video/description-video/DescriptionVideo"
import ThemeVideo from "./theme-video/ThemeVideo"
import PanelWithNumberViewers from "./panel-with-number-viewers/PanelWithNumberViewers"
require('./ContainerVideo.scss')

class ContainerVideo extends React.Component<{}> {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="ContainerVideoStyle">
        <div className="ContainerVideoLeft">
          <VideoPlayer/>
          
        </div>

        <div className="ContainerVideoRight">
          <UserInfoStreamer/>
          <ThemeVideo/>
          <DescriptionVideo/>
          <PanelWithNumberViewers/>
        </div>
      </div>
    )
  }  
}

export default ContainerVideo