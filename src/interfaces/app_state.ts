export interface IAppStoreModule {
  leftBarState: boolean;
  changeLeftBar: () => void;
  badges: {[key: string]: string};
  user: IUser;
}

export interface IUser {
  token: string;
  avatar: string;
  name: string;
  badge: string;
}
