import * as React from "react";
import { observer, inject } from "mobx-react";
import { IPopularTheme } from "src/interfaces/popular_page";
require("./styles.scss");

interface IBarItemProps {
  item: IPopularTheme;
}

@inject("store")
@observer
export default class BarItem extends React.Component<IBarItemProps> {
  constructor(props) {
    super(props);
  }
  public render() {
    return(
      <div className="popular-page__themes__bar-item">
        <img
           src={this.props.item.Img}
           alt={this.props.item.Name + " image"}
        />
        <div>
          <div>{this.props.item.Name}</div>
          <div>{this.props.item.Viewers} viewers</div>
        </div>
      </div>
    );
  }
}
