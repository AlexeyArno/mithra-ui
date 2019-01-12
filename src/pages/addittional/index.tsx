import * as React from "react";
import { observer, inject } from "mobx-react";
require("./styles.scss");

// interface IAdditionalProps {
// }

@inject("store")
@observer
export default class Additional extends React.Component<{}> {
  constructor(props) {
    super(props);
  }
  public render() {
    return(
      <div> Additional </div>
    );
  }
}
