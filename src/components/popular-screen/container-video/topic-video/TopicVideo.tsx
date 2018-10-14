import * as React from 'react';
import { Link } from 'react-router-dom'

require('./TopicVideo.scss')

class TopicVideo extends React.Component<{}> {
  constructor(props){
    super(props)
  }

  render(){
    let txt="design"
    return(
        <div className="TopicVideoStyle">
          {txt}
        </div>
    )
  }  
}

export default TopicVideo