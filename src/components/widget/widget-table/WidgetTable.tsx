import {connect} from "react-redux";
import {bindActionCreators} from "redux"

import {refreshWidgets} from "src/actions/refresh-widgets"
import WidgetComponent from './widget/Widget'

// import {Widget} from 'src/models/widget'



require('./WidgetTable.scss')

const mapStateToProps = (state:any) =>{
  return {
    widgets:  state.widgetReducer.widgets
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({refreshWidgets}, dispatch);

export const WidgetTable = 
connect(mapStateToProps, mapDispatchToProps)(WidgetComponent)


