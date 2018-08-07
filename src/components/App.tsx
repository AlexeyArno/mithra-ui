import * as React from 'react';
import {WidgetTable} from './widget/widget-table/WidgetTable'
import { Link } from 'react-router-dom'
import NavBar from './NavBar/NavBar'

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