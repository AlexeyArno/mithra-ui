import * as React from "react";
import { observer, inject } from "mobx-react";
import { IPopularPageStoreModule } from "src/interfaces/popular_page";
// import SuggestionStream from "./suggestion";
require("./styles.scss");

// interface ITopSideBarProps{}
  // store?: {
  //   popularStore: IPopularPageStoreModule;
  // };
// }

@inject("store")
@observer
class TopSideBar extends React.Component<{}> {
  constructor(props) {
    super(props);
  }

  public render() {
    // const store: ITopSideBarProps = this.props.store.popularStore;
    // console.log(this.props.store)
    return(
      <div className="top-sidebar">
        Top Sidebar
      </div>
    );
  }
}

export default TopSideBar;
