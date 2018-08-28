import * as React from 'react';
import { Link } from 'react-router-dom'
import {UserAvatar} from "src/default-components/user-avatar/UserAvatar"
import ProfessionStreamer from "./profession/ProfessionStreamer"
import NameStreamer from "./name/NameStreamer"
import Like from "./like/Like"

require('./UserInfoStreamer.scss')

class UserInfoStreamer extends React.Component<{}> {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="UserInfoStreamerStyle">
        <div className="UserInfoStreamerBlock1">
          <div className="AvatarWrapper">
            <UserAvatar/>
          </div>
          <div className="UserInfoStreamerBlock1_part1">
            <div className="UserInfoStreamerBlock1_part1_1">
              <NameStreamer/>
              <ProfessionStreamer/>
            </div>
          </div>
          
          <div className="UserInfoStreamerBlock2">
            <Like/>
          </div>
        </div>
        
        
      </div>
    )
  }  
}

export default UserInfoStreamer