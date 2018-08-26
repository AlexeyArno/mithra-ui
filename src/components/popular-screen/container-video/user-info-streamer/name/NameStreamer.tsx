import * as React from 'react';
import { Link } from 'react-router-dom'

require('./NameStreamer.scss')

class NameStreamer extends React.Component<{}> {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="NameStreamerStyle">
        Herr Mannelig  
      </div>
    )
  }  
}

export default NameStreamer