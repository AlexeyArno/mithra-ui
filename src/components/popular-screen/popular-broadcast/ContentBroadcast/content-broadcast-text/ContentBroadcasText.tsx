import * as React from 'react';
import { Link } from 'react-router-dom'
require('./ContentBroadcasText.scss')

class ContentBroadcasText extends React.Component<{}>{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="ContentBroadcasTextStyle">
        <div className="ContentBroadcasTextStyle_FirstRow">
          <div className="ContentBroadcasTextStyle_FirstRow_Text">
            Make Eminem great again
          </div>
        </div>
        
        <div className="ContentBroadcasTextStyle_SecondRow">
          <div className="ContentBroadcasTextStyle_SecondRow_TextLeft">
            13,345 viewers on VJlink228
          </div>
          <div className="ContentBroadcasTextStyle_SecondRow_TextRight">
            Design
          </div>
        </div>

      </div>  
    )
  }
}

export default ContentBroadcasText