import * as React from 'react';
// import {WidgetTable} from './widget/widget-table/WidgetTable'
import {TestRedux} from './test-redux-component/TestComponent'
import { Link } from 'react-router-dom'

require('./App.scss')

const App =() =>{
  return(
    <div>
      <h1>Best Table</h1>
      <TestRedux/>
      <Link to='/auth'>Auth</Link>
    </div>
  )
}

export default App