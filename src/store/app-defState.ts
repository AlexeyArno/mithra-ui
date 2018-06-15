import AppState from './app-state'
import * as Immutable from 'immutable';

export const defaultState: AppState = {
  widgets: Immutable.List([{size: 21}])
}