import * as React from 'react';
import { Link } from 'react-router-dom'

require('./NumberViewers.scss')

class NumberViewers extends React.Component<{}> {
  constructor(props){
    super(props)
  }

  render(){
    let text ="2,500"
    return(
      <div className="NumberViewersStyle">
        <svg xmlns="http://www.w3.org/2000/svg" 
          version="1.1" 
          viewBox="0 0 258.75 258.75" 
          width="12px" 
          height="9px">
            <circle cx="129.375" cy="60" r="60" fill="#ff0000"/>
            <path d="M129.375,150c-60.061,0-108.75,48.689-108.75,108.75h217.5C238.125,198.689,189.436,150,129.375,150z" 
            fill="#FF0000"/>
        </svg>
        {text}  
      </div>
    )
  }  
}

export default NumberViewers