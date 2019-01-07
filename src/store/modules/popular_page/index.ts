import { observable, action} from "mobx";
// tslint:disable-next-line
import { IPopularPageStoreModule, IPopularTheme , IMainStream} from "src/interfaces/popular_page";

export default class PopularPageStoreModule implements IPopularPageStoreModule {
  @observable public themes: IPopularTheme[];
  @observable public mainStream: IMainStream;
  public rootStore: any;

  constructor(rootStore: any) {
    this.mainStream = {
      Description: `Philosophy is the study of general and fundamental problems concerning matters such as existence,
          knowledge, values, reason, mind, and language. The term was probably coined by Pythagoras.`,
      Link: "link",
      Name: "The Best Philosophy Big Boy",
      Theme: "Philosophy",
      Viewers: 2345,
      Author: {
        Img: "https://pp.userapi.com/c850720/v850720387/28481/U3ff4B3qSdc.jpg?ava=1",
        Follow: true,
        Name: "Ubermarginal",
        Badge: "Designer",
      },
    };
    this.themes = [
        {Img: "https://techrocks.ru/wp-content/uploads/2018/10/coding-924920_1280.jpg",
         Name: "Design", Viewers: 255, Url: "#"},
        {Img: "https://techrocks.ru/wp-content/uploads/2018/10/coding-924920_1280.jpg",
         Name: "Code", Viewers: 1255, Url: "#"},
        {Img: "https://techrocks.ru/wp-content/uploads/2018/10/coding-924920_1280.jpg",
         Name: "Photo", Viewers: 2355, Url: "#"},
        {Img: "https://techrocks.ru/wp-content/uploads/2018/10/coding-924920_1280.jpg",
         Name: "3D", Viewers: 1938, Url: "#"},
    ];
    this.rootStore = rootStore;
  }

  // @action
  // public update(data: IPopularPageWarehouse) {
  //  this.data = data;
  // }
}
