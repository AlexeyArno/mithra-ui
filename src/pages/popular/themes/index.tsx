import * as React from "react";
import { observer, inject } from "mobx-react";
import { IPopularTheme } from "src/interfaces/popular_page";
import Language from "src/config/language";
import Bar from "./bar";
import AppStoreModule from "src/store/modules/app";
require("./styles.scss");

interface IThemesProps {
  data: IPopularTheme[];
  store?: {
    appStore: AppStoreModule;
  };
}

@inject("store")
@observer
class Themes extends React.Component<IThemesProps> {
  constructor(props) {
    super(props);
  }

  public render() {
    const themes: IPopularTheme[] = this.props.data;
    const dictionary = Language[this.props.store.appStore.language].popularPage;
    return(
      <div className="themes">
        <div className="themes__header">
          <div>
            <div className="themes__header__left__name">{dictionary.themesHeader}</div>
            <div className="themes__header__left__description">{dictionary.themesHeaderDesc}</div>
          </div>
          <div>{dictionary.themesAllButton}</div>
        </div>
        <div className="themes__bar-wrapper">
          <Bar themes={this.props.data}/>
        </div>
      </div>
    );
  }
}

export default Themes;
