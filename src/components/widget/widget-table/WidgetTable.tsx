import * as React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux"

import {refreshWidgets} from "src/actions/refresh-widgets"
import WidgetComponent from './widget/Widget'
import AppState from 'src/store/app-state'

// import {Widget} from 'src/models/widget'



require('./WidgetTable.scss')

const mapStateToProps = (state:AppState) =>({
  widgets: state.widgets,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({refreshWidgets}, dispatch);

export const WidgetTable = 
connect(mapStateToProps, mapDispatchToProps)(WidgetComponent)


