import * as React from "react";
import { observer, inject } from "mobx-react";
import { IPopularTheme } from "src/interfaces/popular_page";
import Bar from "./bar";
require("./styles.scss");

interface IThemesProps {
  data: IPopularTheme[];
}

@inject("store")
@observer
class Themes extends React.Component<IThemesProps> {
  constructor(props) {
    super(props);
  }

  public render() {
    const themes: IPopularTheme[] = this.props.data;
    // console.log(this.props.store)
    return(
      <div className="themes">
        <div className="themes__header">
          <div>
            <div className="themes__header__left__name">Featured Areas</div>
            <div className="themes__header__left__description">Areas people watching now</div>
          </div>
          <div>See All Areas</div>
        </div>
        <div className="themes__bar-wrapper">
          <Bar themes={this.props.data}/>
        </div>
      </div>
    );
  }
}

export default Themes;
