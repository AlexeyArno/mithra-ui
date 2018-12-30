import * as React from "react";
import { observer, inject } from "mobx-react";
import { IPopularPageStoreModule } from "src/interfaces/popular_page";
import SuggestionStream from "./suggestion";
import TopSideBar from "./top.sidebar";
import Themes from "./themes";
require("./styles.scss");

interface IPopularPageProps {
  store?: {
    popularStore: IPopularPageStoreModule;
  };
}

@inject("store")
@observer
class PopularPage extends React.Component<IPopularPageProps> {
  constructor(props) {
    super(props);
  }

  public render() {
    const store: IPopularPageStoreModule = this.props.store.popularStore;
    // console.log(this.props.store)
    return(
      <div className="popular-page">
        <div className="popular-page__column">
          <SuggestionStream data={store.mainStream}/>
          <Themes/>
        </div>
        <TopSideBar/>
      </div>
    );
  }
}

export default PopularPage;
