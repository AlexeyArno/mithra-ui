import * as React from 'react';
import { Link } from 'react-router-dom'
import VideoPlayer from "./video-player/VideoPlayer"
import UserInfoStreamer from "./user-info-streamer/UserInfoStreamer"
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
          <UserInfoStreamer/>
        </div>

        <div className="ContainerVideoRight">
          
        </div>
      </div>
    )
  }  
}

export default ContainerVideo