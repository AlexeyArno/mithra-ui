import * as React from "react";
import { observer, inject } from "mobx-react";
import { IPopularTheme } from "src/interfaces/popular_page";
import BarItem from "./item";
import BarButton from "./button";
require("./styles.scss");

interface IBarProps {
  themes: IPopularTheme[];
}

@inject("store")
@observer
export default class Bar extends React.Component<IBarProps> {
  constructor(props) {
    super(props);
    this.left = this.left.bind(this);
    this.right =  this.right.bind(this);
  }

  public left() {
    // console.log("left");
  }

  public right() {
    // console.log("right");
  }

  public render() {
    const items: JSX.Element[] = this.props.themes.map((x, i) => <BarItem item={x} key={i}/>);
    return(
      <div className="popular__themes__wrapper">
        <div className="popular__themes__left-button"><BarButton click={this.left}/></div>
        <div className="popular__themes__bar">
          {items}
        </div>
        <div><BarButton click={this.right}/></div>
      </div>
    );
  }
}
