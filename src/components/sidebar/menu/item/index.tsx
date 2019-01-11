import * as React from "react";
import { Link } from "react-router-dom";
require("./styles.scss");

interface ISideBarMenuItemProps {
  icon: string;
  name: string;
  active: boolean;
  open: boolean;
}

export default class SideBarMenuItem extends React.Component<ISideBarMenuItemProps> {
  constructor(props) {
    super(props);
  }

  public render() {
    const wrapCN: string = this.props.open ? "sidebar-item-open" : "sidebar-item-close";
    let iconCN: string = this.props.open ? "sidebar-item__icon" : "sidebar-item__icon-close";
    iconCN += (this.props.active ? "-active" : "");
    const nameCN: string = this.props.open ? "sidebar-item__name-open" : "sidebar-item__name-close";
    return(
      <Link  className={wrapCN} to={"/" + this.props.name} >
        <div
          dangerouslySetInnerHTML={{__html: this.props.icon}}
          className={iconCN}
        />
        <div className={nameCN}>{this.props.name}</div>

      </Link>
    );
  }
}
