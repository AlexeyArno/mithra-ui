import * as React from 'react';
import { Link } from 'react-router-dom'
import NumberViewers from "../number-viewers/NumberViewers"
import TopicVideo from "../topic-video/TopicVideo"
require('./PanelWithNumberViewers.scss')

class PanelWithNumberViewers extends React.Component<{}> {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="PanelWithNumberViewersStyle">
        <NumberViewers/>
        <TopicVideo/>
      </div>
    )
  }  
}

export default PanelWithNumberViewers