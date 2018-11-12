import * as React from 'react'
import ArrbtnPic from './ArrBtnPic/ArrbtnPic'
// import {connect} from "react-redux";
// import {bindActionCreators} from "redux"
import {changeLeftBarState} from 'src/actions/left-bar'
import {withRouter} from 'react-router-dom'

import RootStore from 'src/store'
import { observer, inject } from 'mobx-react'

require('./ArrBtn.scss')

interface ArrBtnComp {
  store?: RootStore
}

@inject('store')
@observer
export class ArrBtn extends React.Component<ArrBtnComp, {}>{
  constructor(props) {
    super(props);
    this.click = this.click.bind(this)
  }

  click(){
    this.props.store.appStore.changeLeftBar()
  } 

  render(){
    return(
      <div className={(this.props.store.appStore.leftBarState)? "ArrBtnActive":"ArrBtn"} onClick={this.click}>
        <ArrbtnPic/>    
      </div>
    )
  }
}

