import { observable, action} from "mobx";
import { IAppStoreModule, IUser } from "../../../interfaces/app_state";

export default class AppStoreModule implements IAppStoreModule {
  @observable public leftBarState: boolean;
  @observable public user: IUser;
  @observable public badges: {[key: string]: string};
  @observable public language: string;
  public rootStore: any;

  constructor(rootStore: any) {
    this.leftBarState = false;
    this.language = "English";
    this.badges = {
      Designer: "/assets/edit.svg",
      Dreamer: "/assets/favorites.svg",
    };
    this.rootStore = rootStore;
    this.user = {
      token: "1111",
      avatar: "https://pp.userapi.com/c850720/v850720387/28481/U3ff4B3qSdc.jpg?ava=1",
      badge: "Designer",
      name: "Alex Arno",
    };
  }

  @action
  public changeLeftBar() {
    this.leftBarState = !this.leftBarState;
  }

}
