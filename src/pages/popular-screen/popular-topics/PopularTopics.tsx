import * as React from "react";
import PopularTopicsTopBar from "./popular-topics-top-bar/PopularTopicsTopBar";
import ContentTopics from "./content-topics/ContentTopics";
// tslint:disable-next-line
import ArrBtnPic from "src/components/navigation-bar/arrow-button/ArrBtnPic";
// tslint:disable-next-line
import {IPopularTheme} from "src/interfaces/popular_page";
require("./PopularTopics.scss");

const ThemeWidth = 340;

interface IPopularTopicsProps {
  themes: IPopularTheme[];
}

interface IPopularThemeState {
  currentIndex: number;
  galleryMargin: number;
}

class PopularTopics extends React.Component<IPopularTopicsProps, IPopularThemeState> {
  private slider: HTMLElement = null;

  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      galleryMargin: 0};
  }

  public ChagePopularThemeNext = () => {
    let shadowedRight: number;
    let length: number;
    let needShow: number;
    let canShow: number;
    shadowedRight = (-this.state.galleryMargin / ThemeWidth);
    length = this.props.themes.length;
    needShow = length - shadowedRight - Math.floor(this.slider.offsetWidth / ThemeWidth);
    if (needShow <= 0) {
      return;
    }
    canShow = Math.floor(this.slider.offsetWidth / ThemeWidth);
    this.setState({
      galleryMargin: this.state.galleryMargin - (canShow * ThemeWidth),
    });
  }

  public Back = () => {
    let shadowedThemes: number;
    let canShow: number;

    shadowedThemes = (-this.state.galleryMargin / ThemeWidth);
    canShow = Math.floor(this.slider.offsetWidth / ThemeWidth);
    if (shadowedThemes > canShow) {
      this.setState({
        galleryMargin: this.state.galleryMargin + (canShow * ThemeWidth),
      });
    } else {
      if (shadowedThemes === 0) {return; }
      this.setState({
        galleryMargin: this.state.galleryMargin + (shadowedThemes * ThemeWidth),
      });
    }
  }
  public render() {
    const contentTopics: JSX.Element[] = this.props.themes.map((themes, i) => (
      <ContentTopics key={i} />
    ));
    return(
      <div className="PopularTopicStyle">
        <PopularTopicsTopBar/>
        <div style={{display: "flex", height: "300px"}}>
          <div onClick={this.Back} className="button-scroll-left">
              <ArrBtnPic/>
          </div>
          <div
            className="wrapper_for_contentTopics"
            ref={(el) => { this.slider = el; }}
          >
            <div
              className="ContentTopics_list"
              style={{marginLeft: this.state.galleryMargin}}
            >
              {contentTopics}
            </div>
          </div>
          <div onClick={this.ChagePopularThemeNext} className="button-scroll-right">
              <ArrBtnPic/>
          </div>
        </div>
      </div>
    );
  }
}

export default PopularTopics;
