import * as React from "react";
import { observer, inject } from "mobx-react";
import { IPopularPageStoreModule } from "src/interfaces/popular_page";
import NavigationMenu from "src/components/navigation-menu";
// import SuggestionStream from "./suggestion";
import StreamPreview from "src/components/stream-preview";
import { IStream } from "src/interfaces/common";
require("./styles.scss");

interface ITopSideBarProps {
  store?: {
    popularStore: IPopularPageStoreModule;
  };
}

interface ITopSideBarState {
  activeElement: number;
}

@inject("store")
@observer
class TopSideBar extends React.Component<ITopSideBarProps, ITopSideBarState> {
  constructor(props) {
    super(props);
    this.menuChange = this.menuChange.bind(this);
    this.state = {
      activeElement: 0,
    };
  }

  public menuChange(n: number) {
    // console.log(n);
    this.setState({
      activeElement: n,
    });
  }

  public getStreams(data: IStream[]) {
    return data.map((item, key) => <div key={key}><StreamPreview data={item}/></div>);
  }

  public render() {
    const store = this.props.store.popularStore.topSideBar;
    const streams: JSX.Element[] =
       (this.state.activeElement ? this.getStreams(store.topTheme.streams) :  this.getStreams(store.topLive));
    return(
      <div className="top-sidebar">
        <NavigationMenu
          content={["Top Live", "Top " + store.topTheme.name]}
          onChange={this.menuChange}
        />
        <div>{streams}</div>
      </div>
    );
  }
}

export default TopSideBar;
