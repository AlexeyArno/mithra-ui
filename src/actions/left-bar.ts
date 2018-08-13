import {Action} from "redux"
import {actionTypes} from './action-types';

export interface LeftBarStateChangeAction extends Action{
  leftBarIsOpen: boolean
}

const createLeftBarStateChangeAction:()=> LeftBarStateChangeAction =
() => ({
  type:actionTypes.CHANGE_STATE_LEFT_BAR_REQUEST,
  leftBarIsOpen:false
})

const createLeftBarStateChangeDoneAction:(leftBarIsOpen:boolean) =>LeftBarStateChangeAction =
(leftBarIsOpen:boolean)=>({
  type:actionTypes.CHANGE_STATE_LEFT_BAR_DONE,
  leftBarIsOpen
})

export const changeLeftBarState=()=>{
  return (dispatch, getState)=>{
    // dispatch(createLeftBarStateChangeAction());
    dispatch(createLeftBarStateChangeDoneAction(!getState().leftBarIsOpen));
    // let promise = new Promise(resolve=>setTimeout(resolve, 100))
    // promise.then(()=>{
    //   dispatch(createLeftBarStateChangeDoneAction(!getState().leftBarIsOpen));
    // })  
  }
}
