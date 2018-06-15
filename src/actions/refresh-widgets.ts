import {Action} from "redux"

import {actionTypes} from './action-types';
import {Widget} from '../models/widget';

export interface WidgetAction extends Action{
  widgets: Widget[];
}

const createRefreshWidgetsRequstAction:()=> WidgetAction =
() => ({
  type:actionTypes.REFRESH_WIDGETS_REQUEST,
  widgets:[]
})

const createRefreshWidgetsDoneAction:(widgets: Array<Widget>) => WidgetAction =
(widgets: Widget[])=>({
  type:actionTypes.REFRESH_WIDGETS_DONE,
  widgets
})

export const refreshWidgets=()=>{
  return (dispatch, getState)=>{
    dispatch(createRefreshWidgetsRequstAction());
    let promise = new Promise(resolve=>setTimeout(resolve, 3000))
    promise.then(()=>{
        let wids:Array<Widget> = []
        for(let i=0;i<10;i++){
          let wid = new Widget()
          wid.size = i
          wids.push(wid)
        }
        dispatch(createRefreshWidgetsDoneAction(wids));
      }
    )
  }
}
