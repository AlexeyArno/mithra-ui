import * as React from 'react';
import { Link } from 'react-router-dom'
import {NavBar} from './navigation-bar/navigationBar'
import PopularScreen from "./popular-screen/PopularScreen"
import SignUpScreen from "./sign_up-screen/SignUpScreen"
const logo = require("assets/heart.svg")

require('./App.scss')

const App = () =>{
  return(
      // <div className="ScreenOne">
      //   {/* <NavBar/> */}
      //   {/* <PopularScreen/> */}
      //   <SignUpScreen/>
      // </div>

        <div className="ScreenTwo">
          {/* <NavBar/> */}
          {/* <PopularScreen/> */}
          <SignUpScreen/>
        </div>
      
  )
}

export default App