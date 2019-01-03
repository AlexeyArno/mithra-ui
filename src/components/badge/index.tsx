import * as React from "react";
require("./styles.scss");

interface IBadgeProps {
  name: string;
  badges: {[key: string]: string};
}

export default class Badge extends React.Component<IBadgeProps> {
  constructor(props) {
    super(props);
  }
  public render() {
    const currentBadge: string = this.props.badges[this.props.name];
    return(
      <div className="badge">
        <img className="badge__image" src={currentBadge} alt="" />
        <div className="badge__name"> {this.props.name} </div>
      </div>
    );
  }
}
