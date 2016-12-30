import { Map } from 'immutable';

function setState(state, newState) {
  return state.merge(newState);
}

function reducer (state = new Map(), action) {
  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state);
    default:
      return state;
  }
}

export { reducer }