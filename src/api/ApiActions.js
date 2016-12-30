import { readEndpoint } from 'redux-json-api';

export default class ApiActions {
  constructor(dispatch) {
    this.dispatch = dispatch;
  }

  fetchPosts(page=1) {
    console.log(`Fetching page ${page} of posts`);
    const promise = readEndpoint(`posts?_page=${page}`);
    this.dispatch(promise);
    return promise;
  }
}