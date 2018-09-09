import * as React from 'react';
import { Link } from 'react-router-dom'
require('./ButtonTopNavigation.scss')

class ButtonTopNavigation extends React.Component<{}>{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="ButtonTopNavigationStyle">
        <div className="BottonTopNavigation_TopLive">
          TOP LIVE
        </div>
        <div className="BottonTopNavigation_TopNameTheme">
          TOP DESIGN
        </div>
      </div>  
    )
  }
}

export default ButtonTopNavigation