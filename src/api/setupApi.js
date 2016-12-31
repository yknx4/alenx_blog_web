import { setEndpointHost, setEndpointPath } from 'redux-json-api';
import Settings from '../blog_settings.json';
import { nodeEnvironment } from '../code/Utils';

export default function (dispatch) {
  const endpoints = Settings.endpoints[nodeEnvironment()];
  dispatch(setEndpointHost(endpoints.baseApiUrl));
  dispatch(setEndpointPath(''));
}
