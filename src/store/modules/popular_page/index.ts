import { observable, action} from "mobx";
// tslint:disable-next-line
import { IPopularPageStoreModule, IPopularTheme , IMainStream, ITopSideBar} from "src/interfaces/popular_page";

export default class PopularPageStoreModule implements IPopularPageStoreModule {
  @observable public themes: IPopularTheme[];
  @observable public mainStream: IMainStream;
  @observable public topSideBar: ITopSideBar;
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
    this.topSideBar = {
      topLive: [
        {Author: "Ubermarginal", Url: "/stream/Ubermarginal", Img: "assets/stream_mock.png", Name: "Make Tea Together",
         Theme: "Design", Viewers: 13345},
        {Author: "Ubermarginal", Url: "/stream/Ubermarginal", Img: "assets/stream_mock.png", Name: "Dummy text",
         Theme: "Design", Viewers: 1246},
        {Author: "Ubermarginal", Url: "/stream/Ubermarginal", Img: "assets/stream_mock.png", Name: "Into electronic ",
         Theme: "Design", Viewers: 111},
      ],
      topTheme: {
        link: "/themes/Design",
        name: "Design",
        streams: [
        {Author: "Ubermarginal", Url: "/stream/Ubermarginal", Img: "assets/stream_mock.png", Name: "Make Tea Together",
         Theme: "Design", Viewers: 5343},
        {Author: "Ubermarginal", Url: "/stream/Ubermarginal", Img: "assets/stream_mock.png", Name: "Lorem Ipsum",
         Theme: "Design", Viewers: 321},
        {Author: "Ubermarginal", Url: "/stream/Ubermarginal", Img: "assets/stream_mock.png", Name: "Make Tea Together",
         Theme: "Design", Viewers: 12},
      ],
      },
    };
    this.rootStore = rootStore;
  }

  // @action
  // public update(data: IPopularPageWarehouse) {
  //  this.data = data;
  // }
}
