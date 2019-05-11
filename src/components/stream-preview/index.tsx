import * as React from "react";
import { observer, inject } from "mobx-react";
import {IStream} from "src/interfaces/common";
import { IAppStoreModule } from "src/interfaces/app_state";
import Langs from "src/config/language";
require("./styles.scss");

interface IStreamPreviewProps {
  data: IStream;
  store?: {
    appStore: IAppStoreModule;
  };
}

@inject("store")
@observer
export default class StreamPreview extends React.Component<IStreamPreviewProps> {
  constructor(props) {
    super(props);
  }
  public render() {
    const dict = Langs[this.props.store.appStore.language].popularPage.topBar;
    return(
      <div className="stream-preview">
        <img src={this.props.data.Img} alt={this.props.data.Name + " image"}/>
        <div className="stream-preview__desc">
          <div>
            <div>{this.props.data.Name}</div>
          </div>
          <div>
            <div>
              {this.props.data.Viewers} {dict.viewers}
              <span className="stream-preview__author-link"> {this.props.data.Author}</span>
            </div>
            <div>{this.props.data.Theme}</div>
          </div>
        </div>
      </div>
    );
  }
}
