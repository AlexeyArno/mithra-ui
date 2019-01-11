export interface IAppLanguage {
  popularPage: IPopularPageLanguage;
  sidebar: ISideBarLanguage;
}

export interface ISideBarLanguage {
  popular: string;
  follow: string;
  search: string;
  settings: string;
  add: string;
}

export interface IPopularPageLanguage {
  themesHeader: string;
  themesHeaderDesc: string;
  themesAllButton: string;
}
