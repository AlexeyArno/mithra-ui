import * as React from 'react';
import NavBar from './navigation-bar/navigationBar'
import { IRootStore } from 'src/store/interfeces';
// import PopularScreen from "./popular-screen/PopularScreen"
import { Provider } from 'mobx-react'

const logo = require("assets/heart.svg")

import Store from 'src/store'

require('./App.scss')

class App extends React.Component<{},{}> {
  private  store:IRootStore  = new Store()

  render(){
      return (
        <Provider store={this.store}>
          <div className="ScreenOne">
            <NavBar/>
            {/* <PopularScreen/> */}
          </div>
        </Provider>
     ) 
  }
}

export default App