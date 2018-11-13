import { IRootStore } from "./interfeces";
import AppStoreModule from "./modules/app";
import {IAppStoreModule} from "../interfaces/app_state";
import PopularPageStoreModule from "./modules/popular_page";
import {IPopularPageStoreModule} from "./modules/popular_page/interfaces";

export default class RootStore implements IRootStore {
  public appStore: IAppStoreModule;
  public popularStore: IPopularPageStoreModule;

  constructor() {
    this.appStore = new AppStoreModule(this);
    this.popularStore = new PopularPageStoreModule(this);
  }
}
