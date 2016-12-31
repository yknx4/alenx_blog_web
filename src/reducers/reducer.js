import { combineReducers } from 'redux-immutable';
import { reducer as api } from 'redux-json-api';
import app from './AppReducer';
import routing from './routeReducer';
import { immutableizeReducer } from '../code/Utils';


export default combineReducers({
  api: immutableizeReducer(api), app, routing,
});
