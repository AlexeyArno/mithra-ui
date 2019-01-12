import * as React from "react";
import { observer, inject } from "mobx-react";
require("./styles.scss");

// interface IFollowsProps {
// }

@inject("store")
@observer
export default class Follows extends React.Component<{}> {
  constructor(props) {
    super(props);
  }
  public render() {
    return(
      <div> Follows </div>
    );
  }
}
