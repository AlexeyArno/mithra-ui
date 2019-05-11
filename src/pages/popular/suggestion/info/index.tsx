import * as React from "react";
import { observer, inject } from "mobx-react";
import { IMainStream, IChannelInfo } from "src/interfaces/popular_page";
import Avatar from "src/components/avatar";
import Badge from "src/components/badge";
import Subscribe from "src/components/subscribe";
import OnlineUsers from "src/components/viewers";
import ThemeBadge from "src/components/theme-badge";
import Button from "src/components/button";
import Langs from "src/config/language";
import { IAppStoreModule } from "src/interfaces/app_state";
require("./styles.scss");

interface IInfoProps {
  data: IMainStream;
  badges: {[key: string]: string};
  store?: {
    appStore: IAppStoreModule,
  };
}

@inject("store")
@observer
export default class  Info extends React.Component<IInfoProps> {
  constructor(props) {
    super(props);
    this.follow = this.follow.bind(this);
    this.viewClick = this.viewClick.bind(this);
  }

  public viewClick() {
    // console.log("View go");
  }

  public render() {
    const data: IChannelInfo = this.props.data.Author;
    const dictionary = Langs[this.props.store.appStore.language].popularPage;

    return(
      <div className="suggestion-form__info">
        <div className="suggestion-form__info__streamer">
          <Avatar url={data.Img}/>
          <div className="suggestion-form__info__streamer__name">
            <div>{data.Name}</div>
            <Badge name={data.Badge} badges={this.props.badges}/>
          </div>
          <div className="suggestion-form__info__subscribe">
            <Subscribe done={this.props.data.Author.Follow} callback={this.follow}/>
          </div>
        </div>
        <div className="suggestion-form__info__stream">
          <div className="suggestion-form__info__stream__name">{this.props.data.Name}</div>
          <div className="suggestion-form__info__stream__description">{this.props.data.Description}</div>
        </div>
        <div className="suggestion-form__info__bottom">
          <div><ThemeBadge name={this.props.data.Theme}/></div>
          <div>
            <OnlineUsers count={this.props.data.Viewers}/>
            <Button content={dictionary.goView} click={this.viewClick}/>
          </div>
        </div>
      </div>
    );
  }

  private follow(follow: boolean) {
    // console.log(follow);
  }

}
