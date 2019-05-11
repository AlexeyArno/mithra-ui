import * as React from "react";
import { observer, inject } from "mobx-react";
require("./styles.scss");

// interface ISearchProps {
// }

@inject("store")
@observer
export default class Search extends React.Component<{}> {
  constructor(props) {
    super(props);
  }
  public render() {
    return(
      <div> Search </div>
    );
  }
}
