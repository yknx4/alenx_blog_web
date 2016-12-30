import Settings from '../blog_settings.json';
import {setEndpointHost, setEndpointPath} from 'redux-json-api'
import { nodeEnvironment } from '../code/Utils'

export default function (dispatch, getState) {
  const endpoints = Settings.endpoints[nodeEnvironment()];
  console.log("setting up api");
  dispatch(setEndpointHost(endpoints.baseApiUrl));
  dispatch(setEndpointPath(''));
}