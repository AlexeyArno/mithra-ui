import * as React from 'react'
import TrendPic from './TrendPic/TrendPic'

require('./TrendBtn.scss')


class TrendBtn extends React.Component<{}, {}>{
    constructor(props) {
        super(props);
    }
    
    render(){
        return(
            <div className="PicTrandBtn">
                <TrendPic/>  
            </div>
        )
    }
}

export default TrendBtn