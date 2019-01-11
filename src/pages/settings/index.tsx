import * as React from "react";
import { observer, inject } from "mobx-react";
require("./styles.scss");

// interface ISettingsProps {

// }

@inject("store")
@observer
export default class Settings extends React.Component<{}> {
  constructor(props) {
    super(props);
  }
  public render() {
    return(
      <div> Settings </div>
    );
  }
}
