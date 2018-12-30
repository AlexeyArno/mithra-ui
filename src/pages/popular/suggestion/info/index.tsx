import * as React from "react";
import { observer, inject } from "mobx-react";
import { IMainStream } from "src/interfaces/popular_page";
import Avatar from "src/components/avatar";
require("./styles.scss");

interface IInfoProps {
  data: IMainStream;
}

@inject("store")
@observer
export default class  Info extends React.Component<IInfoProps> {
  constructor(props) {
    super(props);
  }
  public render() {
    return(
      <div className="suggestion-form__info">
        <div className="suggestion-form__info__streamer">
          <Avatar url={this.props.data.Author.Img}/>
        </div>
        <div>
          Description
        </div>
      </div>
    );
  }
}
