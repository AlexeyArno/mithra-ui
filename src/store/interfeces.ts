import {IAppStoreModule} from "../interfaces/app_state";
import {IPopularPageStoreModule} from "./modules/popular_page/interfaces";

export interface IRootStore {
  appStore: IAppStoreModule;
  popularStore: IPopularPageStoreModule;
}
