import * as React from "react"
import {applyMiddleware, createStore, Store, combineReducers} from "redux"
import thunk from "redux-thunk"

import {widgetReducer} from '../reducers/widget-reducer'
import AppState from './app-state'


// export let GetStore=(history: any)=>{
//   const middleware = routerMiddleware(history);

//   const store = createStore(
//     combineReducers({
//       ...widgetReducer,
//       router: routerReducer
//     }),
//     applyMiddleware(middleware)
//   );
  
//   return store
// }

export const AppStore:Store<AppState> = 
  createStore(widgetReducer, applyMiddleware(thunk))