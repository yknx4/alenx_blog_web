import { readEndpoint } from 'redux-json-api';
import _ from 'lodash';

export default class ApiActions {
  static type = {
    Posts: 'posts',
    Tags: 'tags',
    Categories: 'categories',
    Pages: 'users',
    Users: 'users',
  };

  constructor(dispatch, type) {
    this.dispatch = dispatch;
    this.type = type;
  }

  static fetchMany(dispatch, ...types) {
    const apiAction = new ApiActions(dispatch);
    types.forEach((type) => {
      apiAction.type = type;
      apiAction.fetchWhole();
    });
  }

  fetchWhole() {
    console.log(`Fetching ${this.type}`);
    const promise = readEndpoint(this.type);
    this.dispatch(promise);
    return promise;
  }

  fetchAll(page = 1) {
    console.log(`Fetching page ${page} of ${this.type}`);
    const promise = readEndpoint(`${this.type}?_page=${page}`);
    this.dispatch(promise);
    return promise;
  }

  fetch(id) {
    console.log(`Fetching from ${this.type}: ${id}`);
    const promise = readEndpoint(`${this.type}/${id}`);
    this.dispatch(promise);
    return promise;
  }


}
