import {Reducer} from 'redux'

import AppState from "../store/app-state";
import {actionTypes} from "../actions/action-types";
import {defaultState} from '../store/app-defState'
import { Widget } from '../models/widget';
import {WidgetAction} from '../actions/refresh-widgets';

export const widgetReducer:Reducer<AppState> = 
(state:AppState = defaultState, action:WidgetAction)=>{

  switch(action.type){
    case actionTypes.REFRESH_WIDGETS_REQUEST:
      return Object.assign({},state,{widgets: []});
    case actionTypes.REFRESH_WIDGETS_DONE:
      return Object.assign({},state,{widgets: action.widgets});
    default:
      return state 
  }
};