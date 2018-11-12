import * as React from 'react'
import TrendPic from './TrendPic/TrendPic'
import { withRouter } from 'react-router'
require('./TrendButton.scss')

interface TrendBtnComponentProps{
  open: any
}

class TrendButtonComponent extends React.Component<TrendBtnComponentProps, {}>{
  constructor(props) {
    super(props);
  }
    
  render(){
    return(
      <div className="PicTrendBtn">
        {(this.props.open==true)?<div className="TextTrend">Trend</div>:<TrendPic/>}  
      </div>
    )
  }
}

const mapStateToProps = (state:any, ownProps:any) =>{
  return {
    open: state.leftBarStateReducer.leftBarIsOpen,
    ...ownProps
  }
}
  
const mapDispatchToProps = dispatch =>
  bindActionCreators({}, dispatch);
  
export const TrendButton = connect(mapStateToProps, mapDispatchToProps)(TrendButtonComponent)