import * as React from "react";
import VideoPlayer from "./video-player/VideoPlayer";
import UserInfoStreamer from "./user-info-streamer/UserInfoStreamer";
import DescriptionVideo from "./description-video/DescriptionVideo";
import ThemeVideo from "./theme-video/ThemeVideo";
import PanelWithNumberViewers from "./panel-with-number-viewers/PanelWithNumberViewers";
// tslint:disable-next-line
import { IMainStream } from "src/interfaces/popular_page";
require("./ContainerVideo.scss");

interface IContainerProps {
  data: IMainStream;
}

class ContainerVideo extends React.Component<IContainerProps> {
  constructor(props) {
    super(props);
  }

  public render() {
    return(
      <div className="ContainerVideoStyle">
        <VideoPlayer/>

        <div className="ContainerVideoRight">
          {/* <div className="ContainerVideoRight_under"> */}
            <UserInfoStreamer/>
            <ThemeVideo/>
            <DescriptionVideo/>
            <PanelWithNumberViewers/>
          {/* </div> */}
        </div>
      </div>
    );
  }
}

export default ContainerVideo;
