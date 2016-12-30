import Settings from '../blog_settings.json';
import {setEndpointHost} from 'redux-json-api'
import { nodeEnvironment } from '../code/Utils'

export default function (dispatch) {
  const endpoints = Settings.endpoints[nodeEnvironment()];
  dispatch(setEndpointHost(endpoints.baseApiUrl));
}