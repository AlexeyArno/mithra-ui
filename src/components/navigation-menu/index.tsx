import * as React from "react";
import { observer, inject } from "mobx-react";
require("./styles.scss");

interface INavigationMenuProps {
  content: string[];
  onChange: (n: number) => void;
}

interface INavigationMenuState {
  activeElement: number;
}

@inject("store")
@observer
export default class NavigationMenu extends React.Component<INavigationMenuProps, INavigationMenuState> {
  private firstElement: React.RefObject<HTMLDivElement>;
  private wrapper: React.RefObject<HTMLDivElement>;
  private stick: React.RefObject<HTMLDivElement>;
  constructor(props) {
    super(props);
    this.firstElement = React.createRef();
    this.wrapper = React.createRef();
    this.stick = React.createRef();
    this.state = {
      activeElement: 0,
    };
  }

  public componentDidMount() {
    this.stick.current.style.width = this.firstElement.current.offsetWidth + "px";
  }

  public click(e: React.MouseEvent, key: number) {
    this.setState({
      activeElement: key,
    });
    this.stick.current.style.width = (e.target as HTMLElement).offsetWidth + "px";
    this.stick.current.style.left = (e.target as HTMLElement).offsetLeft - this.wrapper.current.offsetLeft + "px";
    this.props.onChange(key);
  }

  public render() {
    const cont: JSX.Element[] = this.props.content.map(
      (name, key) => <div
                      key={key}
                      className={"navigation-menu_li" + (this.state.activeElement === key ? "-active" : "")}
                      ref={(key === 0 ? this.firstElement : null)}
                      // tslint:disable-next-line
                      onClick={(e: React.MouseEvent) => this.click(e, key)}
      >
        {name.toUpperCase()}
      </div>);

    return(
      <div className="navigation-menu" ref={this.wrapper}>
        <div className="navigation-menu__content">
          {cont}
        </div>
        <div
          className="navigation-menu__stick"
          ref={this.stick}
        />
      </div>
    );
  }
}
