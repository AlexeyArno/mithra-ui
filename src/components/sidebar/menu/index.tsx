import * as React from "react";
import { observer, inject } from "mobx-react";
import Routes from "src/config/routes";
import SideBarMenuItem from "./item";

const settingsIcon = require("assets/settings.svg");
const popularIcon = require("assets/top.svg");
const searchIcon = require("assets/search.svg");
const followIcon = require("assets/community.svg");
const addIcon = require("assets/add.svg");
require("./styles.scss");

const icons: {[key: string]: string} = {
  Popular: popularIcon,
};

interface ISideBarMenuProps {
  open: boolean;
}

@inject("store")
@observer
export default class SideBarMenu extends React.Component<ISideBarMenuProps> {
  constructor(props) {
    super(props);
  }
  public render() {
    const currentUrl: string = location.pathname.substring(1);
    const menu: JSX.Element[] =
      Object.keys(Routes).map((key, i) => {
        return <SideBarMenuItem
                key={i}
                icon={icons[key]}
                name={key}
                active={false}
                open={this.props.open}
                click={() => {}}
               />;
      },
      );
    return(
      <div>
        <div/>
        <div>
          {menu}
        </div>
      </div>
    );
  }
}
