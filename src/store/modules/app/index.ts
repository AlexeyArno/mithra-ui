import { observable, action} from "mobx";
import { IAppStoreModule } from "../../../interfaces/app_state";

export default class AppStoreModule implements IAppStoreModule {
  @observable public leftBarState: boolean;
  public badges: {[key: string]: string};
  public rootStore: any;

  constructor(rootStore: any) {
    this.leftBarState = false;
    this.badges = {
      Designer: "/assets/edit.svg",
      Dreamer: "/assets/favorites.svg",
    };
    this.rootStore = rootStore;
  }

  @action
  public changeLeftBar() {
    this.leftBarState = !this.leftBarState;
  }

}
