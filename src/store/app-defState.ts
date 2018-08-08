import AppState from './app-state'
import * as Immutable from 'immutable';

export const defaultState: any = {
  widgetReducer:{
    widgets: Immutable.List.of({size: 21})
  }
}