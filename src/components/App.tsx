import * as React from 'react';
import {TestRedux} from './test-redux-component/TestComponent'
import { Link } from 'react-router-dom'

const logo = require("assets/heart.svg")

require('./App.scss')

const App =() =>{
  return(
    <div>
      <h1>Best Table</h1>
      <div dangerouslySetInnerHTML={{ __html: logo }} />
      <TestRedux/>
      <Link to='/auth'>Auth</Link>
    </div>
  )
}

export default App