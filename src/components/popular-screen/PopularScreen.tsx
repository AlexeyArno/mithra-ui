import * as React from 'react';
import { Link } from 'react-router-dom'
import ContainerVideo from  "./container-video/ContainerVideo"
import PopularTopicsTopBar from "./popular-topics/popular-topics-top-bar/PopularTopicsTopBar"
import PopularTopics from "./popular-topics/PopularTopics"
import PopularBroadcast from "./popular-broadcast/PopularBroadcast"
require('./PopularScreen.scss')

class PopularScreen extends React.Component<{}> {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="ContentContainer PopularScreenContainerMain ">
        <div className="PopularScreenContent">
          <div className="PopularScreenContentLeft">
            <div className="PopularScreenVideoDescriptionLeft">
              <ContainerVideo/>
            </div>

            <div className="PopularScreenPopularTopicsLeft">
              {/* <PopularTopicsTopBar/> */}
              <PopularTopics/>
            </div>
          </div>

          <div className="PopularScreenContentRight">
            <PopularBroadcast/>
          </div>
        </div>  
      </div>
    )
  }  
}

export default PopularScreen