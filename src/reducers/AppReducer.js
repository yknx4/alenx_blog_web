import { Map } from 'immutable';

function setState(state, newState) {
  return state.merge(newState);
}

function reducer(state = new Map(), action) {
  let finalState;
  switch (action.type) {
    case 'SET_STATE':
      finalState = setState(state, action.state);
      break;
    default:
      finalState = state;
      break;
  }
  return finalState;
}

export { reducer };
