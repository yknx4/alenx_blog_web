import { combineReducers } from 'redux-immutable';
import { reducer as api } from 'redux-json-api';
import { reducer as app } from './AppReducer'
import { reducer as routing } from './routeReducer'
import { immutableizeReducer } from '../code/Utils'


export default combineReducers({
  api: immutableizeReducer(api), app, routing
});