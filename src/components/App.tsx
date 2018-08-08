import * as React from 'react';
import {TestRedux} from './test-redux-component/TestComponent'
import { Link } from 'react-router-dom'
import NavBar from './NavBar/NavBar'

const logo = require("assets/heart.svg")

require('./App.scss')

const App = () =>{
  return(
    <div>
<<<<<<< HEAD
      
      {/* <WidgetTable/> */}
      {/* <Link to='/auth'>Auth</Link> */}
      <NavBar/>
=======
      <h1>Best Table</h1>
      <div dangerouslySetInnerHTML={{ __html: logo }} />
      <TestRedux/>
      <Link to='/auth'>Auth</Link>
>>>>>>> master
    </div>
  )
}

export default App