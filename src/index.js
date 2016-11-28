/* eslint react/jsx-filename-extension: "off" */
/* eslint import/no-named-as-default: "off" */
// React Imports
import React from 'react';
import ReactDOM from 'react-dom';

// Code Imports
import { List, Map } from 'immutable';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reducer from './reducers/reducer';

// Component Imports
import App from './components/App';
import Index from './components/blog/Index';

// Data Imports
import TestPosts from './test_posts.json';
import Settings from './blog_settings.json';


const store = createStore(reducer);
store.dispatch({
  type: 'SET_STATE',
  state: new Map({
    posts: new List(TestPosts.data),
    pages: new Map(TestPosts.links),
    settings: new Map(Settings),
  }),
});

const routes = (<Route path="/" component={App}>
  <IndexRoute component={Index} />
  <Route path="/:page" component={Index} />
</Route>);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
);
