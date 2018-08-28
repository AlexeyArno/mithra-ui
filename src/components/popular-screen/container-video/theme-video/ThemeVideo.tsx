import * as React from 'react';
import { Link } from 'react-router-dom'

require('./ThemeVideo.scss')

class ThemeVideo extends React.Component<{}> {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="ThemeVideoStyle">
        Make 3d great again
      </div>
    )
  }  
}

export default ThemeVideo