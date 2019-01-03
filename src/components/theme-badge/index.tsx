import * as React from "react";
import { observer, inject } from "mobx-react";
require("./styles.scss");

interface IThemeBadgeProps {
  name: string;
}

@inject("store")
@observer
export default class ThemeBadge extends React.Component<IThemeBadgeProps> {
  constructor(props) {
    super(props);
  }
  public render() {
    return(
      <div className="theme-badge">
        #{this.props.name}
      </div>
    );
  }
}
