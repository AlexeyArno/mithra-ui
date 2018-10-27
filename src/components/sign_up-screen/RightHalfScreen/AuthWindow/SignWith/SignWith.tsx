import * as React from 'react';
import { Link } from 'react-router-dom'
import AvatarForSignUp from "./AvatarForSignUp/AvatarForSignUp"
require('./SignWith.scss')

class SignWith extends React.Component<{}> {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="SignWith">
        <div className="SignWith_part1">
          <div className="TextForSignUp"> with </div> 
        </div>
        
        <div className="SignWith_part2">
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