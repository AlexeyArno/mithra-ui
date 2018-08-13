import * as React from 'react'
import ArrbtnPic from './ArrBtnPic/ArrbtnPic'
import {connect} from "react-redux";
import {bindActionCreators} from "redux"
import {changeLeftBarState} from 'src/actions/left-bar'

require('./ArrBtn.scss')


interface ArrBtnComp {
    changeLeftBarState:Function
}


class ArrBtnComponent extends React.Component<ArrBtnComp, {}>{
    constructor(props) {
        super(props);
    }

    click(){
        this.props.changeLeftBarState()
        console.log('click')
    } 

    render(){
        return(
            <div className="ArrBtn" onClick={this.click}>
                <ArrbtnPic/>    
            </div>
        )
    }
}

const mapStateToProps = (state:any) =>{
    return {}
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({changeLeftBarState}, dispatch);
  
export const ArrBtn = 
    connect(mapStateToProps, mapDispatchToProps)(ArrBtnComponent)

