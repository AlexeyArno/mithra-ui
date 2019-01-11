import * as React from "react";
import { observer, inject } from "mobx-react";
require("./styles.scss");

interface ISideBarMenuItemProps {
  icon: string;
  name: string;
  active: boolean;
  click: (name: string) => void;
  open: boolean;
}

@inject("store")
@observer
export default class SideBarMenuItem extends React.Component<ISideBarMenuItemProps> {
  constructor(props) {
    super(props);
  }
  public render() {
    return(
      <div>
        <div dangerouslySetInnerHTML={{__html: this.props.icon}}/>
        <div>{this.props.name}</div>
      </div>
    );
  }
}
