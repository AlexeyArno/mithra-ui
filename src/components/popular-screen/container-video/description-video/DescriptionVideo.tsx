import * as React from 'react';
import { Link } from 'react-router-dom'

require('./DescriptionVideo.scss')

class DescriptionVideo extends React.Component<{}> {
  constructor(props){
    super(props)
  }

  render(){
    let txt="Make some shit for cs go and other garbage games. Make some shit for cs go and other garbage games. Make some shit for cs go and other garbage games"
    return(
      <div className="DescriptionVideoStyle">
        {txt}
      </div>
    )
  }  
}

export default DescriptionVideo