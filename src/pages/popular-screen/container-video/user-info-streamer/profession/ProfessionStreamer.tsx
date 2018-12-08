import * as React from 'react';
import { Link } from 'react-router-dom'

require('./ProfessionStreamer.scss')

class ProfessionStreamer extends React.Component<{}> {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="ProfessionStreamerStyle">
        Designer
      </div>
    )
  }  
}

export default ProfessionStreamer