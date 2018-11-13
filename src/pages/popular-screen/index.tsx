import * as React from "react";
import ContainerVideo from "./container-video/ContainerVideo";
import PopularTopicsTopBar from "./popular-topics/popular-topics-top-bar/PopularTopicsTopBar";
import PopularTopics from "./popular-topics/PopularTopics";
import PopularBroadcast from "./popular-broadcast/PopularBroadcast";
// tslint:disable-next-line
import { IPopularPageWarehouse } from "src/interfaces/popular_page";
require("./PopularScreen.scss");

interface IPopularScreenProps {
  store: IPopularPageWarehouse;
}

class PopularScreen extends React.Component<IPopularScreenProps> {
  constructor(props) {
    super(props);
  }

  public render() {
    const store: IPopularPageWarehouse = this.props.store;
    return(
      <div className="contentWrapper PopularScreenContainerMain ">
        <div className="PopularScreenContent">
          <div className="PopularScreenContentLeft">
            <div className="PopularScreenVideoDescriptionLeft">
              <ContainerVideo data={store.mainStream}/>
            </div>

            <div className="PopularScreenPopularTopicsLeft">
              {/* <PopularTopicsTopBar/> */}
              <PopularTopics/>
            </div>
          </div>

          <div className="PopularScreenContentRight">
            <PopularBroadcast/>
          </div>
        </div>
      </div>
    );
  }
}

export default PopularScreen;
