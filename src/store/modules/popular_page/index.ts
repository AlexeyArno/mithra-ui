import { observable, action} from "mobx";
// tslint:disable-next-line
import { IPopularPageStoreModule, IPopularTheme , IMainStream} from "src/interfaces/popular_page";

export default class PopularPageStoreModule implements IPopularPageStoreModule {
  @observable public themes: IPopularTheme[];
  @observable public mainStream: IMainStream;
  public rootStore: any;

  constructor(rootStore: any) {
    this.mainStream = {
      Description: "Description 1",
      Link: "link",
      Name: "Марго сосёт бибу",
      Theme: "Philosophy",
      Viewers: 2345,
      Author: {
        Img: "https://pp.userapi.com/c850720/v850720387/28481/U3ff4B3qSdc.jpg?ava=1",
        Follow: true,
        Name: "Ubermarginal",
      },
    };
    this.themes = [
        {Img: "img", Name: "Design", Viewers: 255},
        {Img: "img", Name: "Code", Viewers: 1255},
        {Img: "img", Name: "Photo", Viewers: 2355},
    ];
    this.rootStore = rootStore;
  }

  // @action
  // public update(data: IPopularPageWarehouse) {
  //  this.data = data;
  // }
}
