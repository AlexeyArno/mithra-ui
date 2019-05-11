import * as React from "react";
import { Link } from "react-router-dom";
import Languages from "src/config/language";
require("./styles.scss");

interface ISideBarMenuItemProps {
  icon: string;
  name: string;
  active: boolean;
  open: boolean;
  lang: string;
}

export default class SideBarMenuItem extends React.Component<ISideBarMenuItemProps> {
  constructor(props) {
    super(props);
  }

  public render() {
    const dictionary = Languages[this.props.lang].sidebar;
    const wrapCN: string = this.props.open ? "sidebar-item-open" : "sidebar-item-close";
    let iconCN: string = this.props.open ? "sidebar-item__icon" : "sidebar-item__icon-close";
    iconCN += (this.props.active ? "-active" : "");
    let nameCN: string = this.props.open ? "sidebar-item__name-open" : "sidebar-item__name-close";
    nameCN += (this.props.active ? "-active" : "");
    return(
      <Link  className={wrapCN} to={"/" + this.props.name} >
        <div
          dangerouslySetInnerHTML={{__html: this.props.icon}}
          className={iconCN}
        />
        <div className={nameCN}>{dictionary[this.props.name]}</div>

      </Link>
    );
  }
}
