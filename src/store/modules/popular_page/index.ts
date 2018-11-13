import { observable, action} from "mobx";
// tslint:disable-next-line
import { IPopularPageStoreModule, IPopularPageWarehouse } from "src/interfaces/popular_page";

export default class PopularPageStoreModule implements IPopularPageStoreModule {
  @observable public data: IPopularPageWarehouse;
  public rootStore: any;

  constructor(rootStore: any) {
    this.rootStore = rootStore;
  }

  @action
  public update(data: IPopularPageWarehouse) {
    this.data = data;
  }
}
