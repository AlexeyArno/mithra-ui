import * as React from "react";
import { observer, inject } from "mobx-react";
require("./styles.scss");

// interface IStreamProps {
// }

@inject("store")
@observer
export default class Stream extends React.Component<{}> {
  constructor(props) {
    super(props);
  }
  public render() {
    return(
      <div> Stream </div>
    );
  }
}
