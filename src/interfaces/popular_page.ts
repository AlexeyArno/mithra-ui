import {IStream} from "./common";

export interface IPopularPageStoreModule {
  mainStream: IMainStream;
  themes: IPopularTheme[];
  topSideBar: ITopSideBar;
}

export interface IChannelInfo {
  Img: string;
  Name: string;
  Follow: boolean;
  Badge: string;
}

export interface IMainStream {
  Link: string;
  Author: IChannelInfo;
  Name: string;
  Description: string;
  Viewers: number;
  Theme: string;
}

export interface IPopularTheme {
  Viewers: number;
  Img: string;
  Name: string;
  Url: string;
}

export interface ITopSideBar {
  topLive: IStream[];
  topTheme: ISideBarTopTheme;
}

interface ISideBarTopTheme {
  streams: IStream[];
  name: string;
  link: string;
}
