import * as React from 'react';
import { Link } from 'react-router-dom'
require('./style.scss')

class LeftHalfScreen extends React.Component<{}> {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="left-screen" >
        <div className="left-screen__text">
          <img
           
           src={"https://images.pexels.com/photos/1080854/pexels-photo-1080854.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
          />
         
        </div>
      </div>
    )
  }  
}

export default LeftHalfScreen