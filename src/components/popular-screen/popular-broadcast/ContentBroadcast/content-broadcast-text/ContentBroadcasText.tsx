import * as React from 'react';
import { Link } from 'react-router-dom'
require('./ContentBroadcasText.scss')

class ContentBroadcasText extends React.Component<{}>{
  constructor(props){
    super(props);
  }

  render(){
    let NameVideo="Make Eminem great again"
    let viewers = "13,345"
    let Author = "VJlink228"
    let prof = "math"
    return(
      <div className="ContentBroadcasTextStyle">
        <div className="ContentBroadcasTextStyle_FirstRow">
          <div className="ContentBroadcasTextStyle_FirstRow_Text">
            {NameVideo}
          </div>
        </div>
        
        <div className="ContentBroadcasTextStyle_SecondRow">
          <div className="ContentBroadcasTextStyle_SecondRow_TextLeft">
            {viewers} viewers on {Author}
          </div>
          <div className="ContentBroadcasTextStyle_SecondRow_TextRight">
            {prof}
          </div>
        </div>

      </div>  
    )
  }
}

export default ContentBroadcasText