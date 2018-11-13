import * as React from "react";
import ArrBtnPic from "./ArrBtnPic";
import { observer, inject } from "mobx-react";

require("./ArrBtn.scss");

interface IArrBtnComp {
  store?: {appStore: {leftBarState: boolean, changeLeftBar: () => void} };
}

@inject("store")
@observer
export class ArrBtn extends React.Component<IArrBtnComp, {}> {
  constructor(props) {
    super(props);
    this.click = this.click.bind(this);
  }

  public click() {
    this.props.store.appStore.changeLeftBar();
  }

  public render() {
    return(
      <div className={(this.props.store.appStore.leftBarState) ? "ArrBtnActive" : "ArrBtn"} onClick={this.click}>
        <ArrBtnPic/>
      </div>
    );
  }
}
