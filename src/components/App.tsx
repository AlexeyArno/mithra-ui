import * as React from 'react';
import {TestRedux} from './test-redux-component/TestComponent'
import { Link } from 'react-router-dom'
import NavBar from './NavBar/NavBar'

const logo = require("assets/heart.svg")

require('./App.scss')

const App = () =>{
  return(
    <div>
      {/* <WidgetTable/> */}
      {/* <Link to='/auth'>Auth</Link> */}
      <NavBar/>
    </div>
  )
}

export default App