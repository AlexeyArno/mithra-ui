import * as React from 'react';
import { Link } from 'react-router-dom'
import ContainerVideo from  "./container-video/ContainerVideo"


require('./PopularScreen.scss')

class PopularScreen extends React.Component<{}> {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="PopularScreenContainerMain">
        <div className="PopularScreenContent">
          <div className="PopularScreenContentLeft">
            <div className="PopularScreenVideoDescription">
              <ContainerVideo/>
            </div>

            <div className="PopularScreenPopularTopics">
              
            </div>
          </div>

          <div className="PopularScreenContentRight">
      
          </div>
        </div>  
      </div>
    )
  }  
}

export default PopularScreen