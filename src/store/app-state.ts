import {Widget} from '../models/widget'
import * as Immutable from 'immutable';


export default interface AppState{
  widgets: Immutable.List<Widget>
}