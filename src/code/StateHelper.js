import { Map, List } from 'immutable'
import _ from 'lodash'

export default class StateHelper {
  constructor(state) {
    this.state = state;
  }

  getPost(id, notFoundValue = new Map()) {
    if (_.isUndefined(id)) return notFoundValue;
    const posts = this.state.getIn(['api', 'posts', 'data'], new List());
    return posts.find((v) => {return v.get('id') === id}) || notFoundValue;
  }

  getCurrentPost(notFoundValue = new Map()) {
    const currentId = this.state.getIn(['app', 'currentId']);
    return this.getPost(currentId, notFoundValue);
  }
}