import * as React from 'react'
import MsgBtnPic from './MsgBtnPic/MsgBtnPic'

require('./MsgBtn.scss')

class MsgBtn extends React.Component<{}, {}>{
    constructor(props) {
        super(props);
    }
    
    render(){
        return(
            <div className="MsgBtn">
                <MsgBtnPic/>
            </div>
        )
    }
}

export default MsgBtn