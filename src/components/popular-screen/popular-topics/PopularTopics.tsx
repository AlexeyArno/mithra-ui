import * as React from 'react';
import { Link } from 'react-router-dom'
import PopularTopicsTopBar from "./popular-topics-top-bar/PopularTopicsTopBar"
import ContentTopics from "./content-topics/ContentTopics"
import ArrBtnPic from "src/components/navigation-bar/arrow-button/ArrBtnPic/ArrBtnPic"
require('./PopularTopics.scss')
let style1;
class PopularTopics extends React.Component{
  constructor(props){
    super(props);
  }

  state={
      themes: [1,2,3,4,5,6,7,8],
      currentIndex: 0,
  }

  ChagePopularThemeNext = () =>{
    this.setState ({
      currentIndex: this.state.currentIndex + 1,
    });
  }

  
    
  render(){
    return(
      <div className="PopularTopicStyle">
        <PopularTopicsTopBar/>
        <div className="wrapper_for_contentTopics">
          <div className="ContentTopics_list" >

            {this.state.themes.map((themes, i) => (
              <ContentTopics key={i} />
            ))}
                 
          </div>
          <div onClick={this.ChagePopularThemeNext} className="button-scroll">  
            <ArrBtnPic/>
          </div>
        </div>
        
      </div> 
    )
  }
}

export default PopularTopics