import * as React from 'react';
import { Link } from 'react-router-dom'
import {NavBar} from './navigation-bar/navigationBar'
import PopularScreen from "./popular-screen/PopularScreen"
const logo = require("assets/heart.svg")

require('./App.scss')

const App = () =>{
  return(
      <div className="ScreenOne">
        <NavBar/>
        <PopularScreen/>
      </div>
      
  )
}

export default App