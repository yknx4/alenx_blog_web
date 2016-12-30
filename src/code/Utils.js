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

const immutableizeReducer = reducer => (state = new Map(), action) =>
  fromJS(reducer(state.toJS(), action));

export { formatDate, navigatorLanguage, isMainPage, immutableizeReducer, mutableDefaultState, defaultState };
