import * as React from 'react'
import ArrbtnPic from './ArrBtnPic/ArrbtnPic'
require('./ArrBtn.scss')

class ArrBtn extends React.Component<{}, {}>{
    constructor(props) {
        super(props);
    }
    
    render(){
        return(
            <div className="ArrBtn">
                <ArrbtnPic/>    
            </div>
        )
    }
}

export default ArrBtn