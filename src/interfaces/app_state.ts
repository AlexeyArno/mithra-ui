export interface IAppStoreModule {
  leftBarState: boolean;
  changeLeftBar: () => void;
  badges: {[key: string]: string};
}
