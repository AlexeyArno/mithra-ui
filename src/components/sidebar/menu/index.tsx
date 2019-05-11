import * as React from "react";
import { observer, inject } from "mobx-react";
import {SIDEBAR_ROUTES} from "src/config/routes";
import { Redirect} from "react-router-dom";
import SideBarMenuItem from "./item";

const settingsIcon = require("assets/settings.svg");
const popularIcon = require("assets/top.svg");
const searchIcon = require("assets/search.svg");
const followIcon = require("assets/community.svg");
const addIcon = require("assets/add.svg");
require("./styles.scss");

const icons: {[key: string]: string} = {
  popular: popularIcon,
  follow: followIcon,
  search: searchIcon,
  settings: settingsIcon,
  add: addIcon,
};

interface ISideBarMenuProps {
  open: boolean;
  lang: string;
}

interface ISideBarMenuState {
  level: number;
}

@inject("store")
@observer
export default class SideBarMenu extends React.Component<ISideBarMenuProps, ISideBarMenuState> {
  constructor(props) {
    super(props);
    this.state = {
      level: 0,
    };
    this.click = this.click.bind(this);
  }

  public componentWillMount() {
    this.click();
  }

  public click() {
    const loc = location.pathname.substring(1);
    let level = 0;
    Object.keys(SIDEBAR_ROUTES).map((key, i) => {if (key === loc) {level = i; }});
    this.setState({level});
  }

  public render() {
    const currentUrl: string = location.pathname.substring(1);
    const menu: JSX.Element[] =
      Object.keys(SIDEBAR_ROUTES).map(
        (key, i) => {
          return <SideBarMenuItem
                      icon={icons[key]}
                      key={i}
                      lang={this.props.lang}
                      name={key}
                      active={(currentUrl === key)}
                      open={this.props.open}
          />;
        },
      );
    return(
      <div className="sidebar__menu">
        <div className="sidbar__menu__stick" style={{marginTop: this.state.level * 50 + "px"}}/>
        <div onClick={this.click}>
          {menu}
        </div>
      </div>
    );
    }
  }
