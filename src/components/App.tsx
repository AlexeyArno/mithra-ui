import * as React from 'react';
import { Link } from 'react-router-dom'
import NavBar from './NavBar/NavBar'

const logo = require("assets/heart.svg")

require('./App.scss')

const App = () =>{
  return(
    <div>
      <NavBar/>
    </div>
  )
}

export default App