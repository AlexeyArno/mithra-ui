import * as React from 'react';
import { Link } from 'react-router-dom'
import {NavBar} from './navigation-bar/navigationBar'

const logo = require("assets/heart.svg")

require('./App.scss')

const App = () =>{
  return(
      <NavBar/>
  )
}

export default App