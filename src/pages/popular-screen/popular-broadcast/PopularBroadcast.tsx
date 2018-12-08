import * as React from 'react';
import { Link } from 'react-router-dom'
import ButtonTopNavigation from "./button-top-navigation/ButtonTopNavigation"
import ContentBroadcast from "./ContentBroadcast/ContentBroadcast"
require('./PopularBroadcast.scss')

class PopularBroadcast extends React.Component<{}>{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="PopularBroadcastStyle">
        <ButtonTopNavigation/>
        <div className="ContentBroadcast_list">
          <ContentBroadcast/>
          <ContentBroadcast/>
          <ContentBroadcast/>
        </div>
      </div>  
    )
  }
}

export default PopularBroadcast