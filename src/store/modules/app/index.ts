import { observable, action} from "mobx";
import { IAppStoreModule } from "../../../interfaces/app_state";

export default class AppStoreModule implements IAppStoreModule {
  @observable public leftBarState: boolean;
  public rootStore: any;

  constructor(rootStore: any) {
    this.leftBarState = false;
    this.rootStore = rootStore;
  }

  @action
  public changeLeftBar() {
    this.leftBarState = !this.leftBarState;
  }

}
