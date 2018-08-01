import * as React from "react"
import {applyMiddleware, createStore, Store, combineReducers} from "redux"
import thunk from "redux-thunk"

import {reducers} from 'src/reducers/rootReducer'
import AppState from './app-state'
import {defaultState} from './app-defState'


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

export let AppStore:any = 
  createStore(reducers, defaultState, applyMiddleware(thunk))