import * as React from "react";
import { observer, inject } from "mobx-react";
require("./styles.scss");
const icon: string = require("assets/right-arrow.svg");

interface ISideBarButtonProps {
  store?: {
    appStore: {
      leftBarState: boolean,
      changeLeftBar: () => void};
  };
}

@inject("store")
@observer
export default class SideBarButton extends React.Component<ISideBarButtonProps> {
  constructor(props) {
    super(props);
    this.click = this.click.bind(this);
  }

  public click() {
    this.props.store.appStore.changeLeftBar();
  }

  public render() {
    const {appStore} = this.props.store;
    const CN: string = (appStore.leftBarState ? "side-bar__button__icon-open" : "side-bar__button__icon");
    return(
      <div
        dangerouslySetInnerHTML={{__html: icon}}
        className={CN}
        onClick={this.click}
      />
    );
  }
}
