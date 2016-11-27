import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {List, Map} from 'immutable';

import TestPosts from './test_posts.json'
import {createStore} from 'redux';
import reducer from './reducers/reducer';
import {Provider} from 'react-redux';
import Settings from './blog_settings.json'

const store = createStore(reducer);
store.dispatch({
  type: 'SET_STATE',
  state: Map({
    posts: List(TestPosts.data),
    pages: Map(TestPosts.links),
    settings: Map(Settings)
  })
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
