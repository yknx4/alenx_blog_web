import { readEndpoint } from 'redux-json-api';

export default class ApiActions {
  constructor(dispatch) {
    this.dispatch = dispatch;
  }

  fetchPosts(page=1) {
    console.log(`Fetching page ${page} of posts`);
    this.dispatch(readEndpoint(`pages?_page=${page}`))
  }
}