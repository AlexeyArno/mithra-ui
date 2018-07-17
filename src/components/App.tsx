import * as React from 'react';
import {WidgetTable} from './widget/widget-table/WidgetTable'

require('./App.scss')

const App =() =>{
  return(
    <div>
      <h1>Best Table</h1>
      <WidgetTable/>
    </div>
  )
}

export default App