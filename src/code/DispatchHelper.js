import { Map } from 'immutable';
export default class DispatchHelper {
  constructor(dispatch) {
    this.dispatch = dispatch;
    this.setCurrentId = this.setCurrentId.bind(this);
  }

  setCurrentId(id) {
    this.dispatch({
      type: 'SET_STATE',
      state: new Map({
        currentId: id,
      }),
    });
  }

}
