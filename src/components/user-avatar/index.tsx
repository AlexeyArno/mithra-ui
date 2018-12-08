import * as React from "react";

require("./styles.scss");

interface IUserAvatarProps {
  open: any;
}

export class UserAvatar extends React.Component<IUserAvatarProps, {}> {
  constructor(props) {
    super(props);
  }

  public render() {
    return(
      <div  className={(this.props.open === false) ? "UserAvatar" : "UserAvatar"} >
        Avatar
      </div>
    );
  }
}
