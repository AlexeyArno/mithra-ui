import {Action} from "redux"
import {actionTypes} from './action-types';

export interface LeftBarStateChangeAction extends Action{
  
}

// const createLeftBarStateChangeAction:()=> LeftBarStateChangeAction =
// () => ({
//   type:actionTypes.CHANGE_STATE_LEFT_BAR_REQUEST,
//   leftBarIsOpen:false
// })

const createLeftBarStateChangeAction:() =>LeftBarStateChangeAction =
()=>({
  type:actionTypes.CHANGE_STATE_LEFT_BAR
})

export const changeLeftBarState=()=>{
  return (dispatch, getState)=>{
    // dispatch(createLeftBarStateChangeAction());
    dispatch(createLeftBarStateChangeAction());
    // let promise = new Promise(resolve=>setTimeout(resolve, 100))
    // promise.then(()=>{
    //   dispatch(createLeftBarStateChangeDoneAction(!getState().leftBarIsOpen));
    // })  
  }
}
