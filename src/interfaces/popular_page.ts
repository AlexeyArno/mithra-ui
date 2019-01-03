export interface IPopularPageStoreModule {
  mainStream: IMainStream;
  themes: IPopularTheme[];
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
}
