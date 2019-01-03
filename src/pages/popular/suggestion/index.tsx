import * as React from "react";
import { observer, inject } from "mobx-react";
import { IMainStream } from "src/interfaces/popular_page";
import Player from "src/components/player";
import Info from "./info";
import { IRootStore } from "src/store/interfeces";
require("./styles.scss");

interface ISuggestionStreamProps {
  data?: IMainStream;
  store?: IRootStore;
}

//
@inject("store")
@observer
class SuggestionStream extends React.Component<ISuggestionStreamProps> {
  constructor(props) {
    super(props);
  }

  public render() {
    // const store: ISuggestionStreamProps = this.props.data;
    const author = this.props.data.Author.Name;
    return(
      <div className="suggestion-form">
        <div className="suggestion-form__player">
          <Player streamName={author}/>
        </div>
        <Info data={this.props.data} badges={this.props.store.appStore.badges}/>
      </div>
    );
  }
}

export default SuggestionStream;
