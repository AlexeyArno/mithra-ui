import * as React from 'react';
import { Link } from 'react-router-dom'
import VideoPlayer from "./video-player/VideoPlayer"
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

        </div>
      </div>
    )
  }  
}

export default ContainerVideo