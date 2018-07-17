import {Reducer} from 'redux'

import AppState from "../store/app-state";
import {actionTypes} from "../actions/action-types";
import {defaultState} from '../store/app-defState'
import { Widget } from '../models/widget';
import {WidgetAction} from '../actions/refresh-widgets';
import * as Immutable from 'immutable';


export const widgetReducer:Reducer<AppState> = 
(state:AppState = defaultState, action:WidgetAction)=>{

  switch(action.type){
    case actionTypes.REFRESH_WIDGETS_REQUEST:
      return Object.assign({},state,{widgets: Immutable.List([])});
    case actionTypes.REFRESH_WIDGETS_DONE:
      return Object.assign({},state,{widgets: Immutable.List(action.widgets)});
    default:
      return state 
  }
};