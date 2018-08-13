import {Reducer} from 'redux'

import AppState from "../store/app-state";
import {actionTypes} from "../actions/action-types";
import {defaultState} from '../store/app-defState'
import {LeftBarStateChangeAction} from '../actions/left-bar';
import * as Immutable from 'immutable';


export const leftBarStateReducer:Reducer<AppState> = 
(state:AppState = defaultState, action:LeftBarStateChangeAction)=>{
  switch(action.type){
    case actionTypes.CHANGE_STATE_LEFT_BAR_DONE:
      state.leftBarIsOpen=!state.leftBarIsOpen
      return state;
    default:
      return state 
  }
};