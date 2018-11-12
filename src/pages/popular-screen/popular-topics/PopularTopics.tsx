import * as React from 'react';
import { Link } from 'react-router-dom'
import PopularTopicsTopBar from "./popular-topics-top-bar/PopularTopicsTopBar"
import ContentTopics from "./content-topics/ContentTopics"
import ArrBtnPic from "src/pages/navigation-bar/arrow-button/ArrBtnPic/ArrBtnPic"
require('./PopularTopics.scss')

const ThemeWidth = 340;

class PopularTopics extends React.Component{
  constructor(props){
    super(props);
  }

  slider = null;

  state={
      themes: [1,2,3,4,5,6,7,8,2,3,4,5,6,7,8],
      currentIndex: 0,
      galleryMargin: 0
  }

  ChagePopularThemeNext = () =>{
    let shadowedRight = (-this.state.galleryMargin/ThemeWidth)
    let length = this.state.themes.length

    let needShow = length-shadowedRight-Math.floor(this.slider.offsetWidth/ThemeWidth)
    if(needShow<=0) return;

    let canShow = Math.floor(this.slider.offsetWidth/ThemeWidth)
    this.setState({
      galleryMargin: this.state.galleryMargin-(canShow*ThemeWidth)
    })
  }

  Back = () =>{
    let shadowedThemes = (-this.state.galleryMargin/ThemeWidth)
    let canShow = Math.floor(this.slider.offsetWidth/ThemeWidth)
    if(shadowedThemes>canShow){
      this.setState({
        galleryMargin: this.state.galleryMargin+(canShow*ThemeWidth)
      })
    }else{
      if(shadowedThemes==0) return;
      this.setState({
        galleryMargin: this.state.galleryMargin+(shadowedThemes*ThemeWidth)
      })
    }
  }
    
  render(){
    return(
      <div className="PopularTopicStyle">
        <PopularTopicsTopBar/>
        <div style={{display: "flex", height:"300px"}}>
        
          <div onClick={this.Back} className="button-scroll-left"  >  
              <ArrBtnPic/>
          </div>
          <div className="wrapper_for_contentTopics"
                ref={(el) => { this.slider = el; }} >
            <div className="ContentTopics_list" style={{marginLeft: this.state.galleryMargin}}>

              {this.state.themes.map((themes, i) => (
                <ContentTopics key={i} />
              ))}
                  
            </div>
          
          </div>
          <div onClick={this.ChagePopularThemeNext} className="button-scroll-right">  
              <ArrBtnPic/>
          </div>
        </div>
      </div> 
    )
  }
}

export default PopularTopics