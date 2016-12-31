import {Map, fromJS} from 'immutable';

function formatDate(date) {
  const parsedDate = new Date(date);
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };

  return parsedDate.toLocaleDateString(navigatorLanguage(), options);
}

function navigatorLanguage() {
  // eslint-disable-next-line
  return navigator.languages && navigator.languages[0] || // Chrome / Firefox
         navigator.language ||   // All browsers
         navigator.userLanguage; // IE <= 10
}

function isMainPage() {
  return !(window.location.pathname.includes('posts') || window.location.pathname.includes('pages'));
}

const mutableDefaultState = {api: {}, app: {}};
const defaultState = fromJS(mutableDefaultState);

const immutableizeReducer = reducer => (state = new Map(), action) => {
  const newAction = action;
  let newState = state.toJS();
  if(newAction.state && newAction.state.toJS) {
    newAction.state = newAction.state.toJS();
  }
  newState = state.merge(fromJS(reducer(newState, newAction)));
  return newState;
};


function immutableizeMiddleware(middleware) {
  return function ({dispatch, getState}) {
    return middleware({dispatch, getState: () => { return getState().toJS(); }});
  }
}

function nodeEnvironment() {
  return process.env.NODE_ENV;
}

export { formatDate, navigatorLanguage, isMainPage, immutableizeReducer, immutableizeMiddleware, mutableDefaultState, defaultState, nodeEnvironment };
