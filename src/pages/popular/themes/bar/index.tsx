import * as React from "react";
import { observer, inject } from "mobx-react";
import { IPopularTheme } from "src/interfaces/popular_page";
import BarItem from "./item";
import BarButton from "./button";
require("./styles.scss");

interface IBarProps {
  themes: IPopularTheme[];
}

const delay = 40;

@inject("store")
@observer
export default class Bar extends React.Component<IBarProps> {
  private wrapper: React.RefObject<HTMLDivElement>;
  private content: React.RefObject<HTMLDivElement>;
  private leftStop: boolean;
  private rightStop: boolean;
  constructor(props) {
    super(props);
    this.left = this.left.bind(this);
    this.leftUp = this.leftUp.bind(this);
    this.right =  this.right.bind(this);
    this.rightUp = this.rightUp.bind(this);
    this.wrapper = React.createRef();
    this.content = React.createRef();
    this.leftStop = false;
    this.rightStop = false;
  }

  public async left() {
    let speed = 1;
    this.leftStop = false;
    while (!this.leftStop) {
      const oldValue = this.getLeft();
      if (oldValue >= 0) {break; }
      this.content.current.style.left = oldValue + (speed * 5) + "px";
      speed = (speed === 9 ? speed : speed + 1);
      await this.sleep(delay);
    }
  }

  public leftUp() {
    this.leftStop = true;
  }

  public async right() {
    let speed = 1;
    this.rightStop = false;
    const limiter = (this.content.current.offsetWidth - this.wrapper.current.offsetWidth) * -1;
    while (!this.rightStop) {
      const oldValue = this.getLeft();
      if (oldValue <= limiter) {break; }
      this.content.current.style.left = oldValue - (speed * 10) + "px";
      speed = (speed === 9 ? speed : speed + 1);
      await this.sleep(delay);
    }
  }

  public rightUp() {
    this.rightStop = true;
  }

  public render() {
    const items: JSX.Element[] = this.props.themes.map((x, i) => <BarItem item={x} key={i}/>);
    return(
      <div className="popular__themes__wrapper">
        <div className="popular__themes__left-button">
          <BarButton
            press={this.left}
            up={this.leftUp}
          />
        </div>
        <div className="popular__themes__bar" ref={this.wrapper}>
          <div className="popular__themes__bar__content" ref={this.content} style={{left: "0px"}}>
            {items}
          </div>
        </div>
        <div>
          <BarButton
            press={this.right}
            up={this.rightUp}
          />
        </div>
      </div>
    );
  }

  private getLeft(): number {
    const left = this.content.current.style.left;
    const oldValue = parseInt(left.substring(0, left.length - 2), 10);
    return oldValue;
  }

  private sleep(ms) {
    return new Promise((resolve: any) => setTimeout(resolve, ms));
  }
}
