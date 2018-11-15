import * as React from "react";
import ContainerVideo from "./container-video/ContainerVideo";
import PopularTopicsTopBar from "./popular-topics/popular-topics-top-bar/PopularTopicsTopBar";
import PopularTopics from "./popular-topics/PopularTopics";
import PopularBroadcast from "./popular-broadcast/PopularBroadcast";
import { IPopularPageStoreModule } from "src/interfaces/popular_page";
import { observer, inject } from "mobx-react";
require("./styles.scss");

interface IPopularScreenProps {
  store?: {
    popularStore: IPopularPageStoreModule;
  };
}

@inject("store")
@observer
class PopularScreen extends React.Component<IPopularScreenProps> {
  constructor(props) {
    super(props);
  }

  public render() {
    const store: IPopularPageStoreModule = this.props.store.popularStore;
    return(
      <div className="contentWrapper PopularScreenContainerMain ">
        <div className="PopularScreenContent">
          <div className="PopularScreenContentLeft">
            <div className="PopularScreenVideoDescriptionLeft">
              <ContainerVideo data={store.mainStream}/>
            </div>

            <div className="PopularScreenPopularTopicsLeft">
              {/* <PopularTopicsTopBar/> */}
              <PopularTopics themes={store.themes}/>
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
