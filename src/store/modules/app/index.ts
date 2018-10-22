import { observable, action, reaction, computed } from 'mobx'
import { IAppStoreModule } from './interfaces';
// import { RootStore } from 'src/store';

export default class AppStoreModule implements IAppStoreModule{
  @observable leftBarState:boolean
  rootStore:any

  constructor(rootStore:any) {
    this.leftBarState = false;
    this.rootStore = rootStore
  }

  @action
  changeLeftBar() {
    this.leftBarState = !this.leftBarState
  }

}