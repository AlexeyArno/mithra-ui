import * as React from 'react';
import { Link } from 'react-router-dom'
import AvatarForSignUp from "./avatar-sign"
require('./style.scss')

class SignWith extends React.Component<{}> {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="sign-with">
        <div className="sign-with__part1">
          <div className="sign-with__part1__text"> with </div> 
        </div>
        
        <div className="sign-with__part2">
          <AvatarForSignUp/>
          <AvatarForSignUp/>
          <AvatarForSignUp/>
          <AvatarForSignUp/>
        </div>
      </div>
    )
  }  
}

export default SignWith