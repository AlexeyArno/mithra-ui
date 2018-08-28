import * as React from 'react';
import { Link } from 'react-router-dom'

require('./DescriptionVideo.scss')

class DescriptionVideo extends React.Component<{}> {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="DescriptionVideoStyle">
        Make some shit for cs go and other garbage games
      </div>
    )
  }  
}

export default DescriptionVideo