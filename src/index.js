/* eslint react/jsx-filename-extension: "off" */
/* eslint import/no-named-as-default: "off" */
// React Imports
import React from 'react';
import ReactDOM from 'react-dom';

// Code Imports
import { List, Map } from 'immutable';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reducer from './reducers/reducer';
import setupApi from  './code/setupApi'
import { defaultState } from './code/Utils'

// Component Imports
import App from './components/App';
import Index from './components/blog/Index';
import Post from './components/blog/Post'
import Wrapper from './components/Wrapper'

// Data Imports
import TestPosts from './test_posts.json';
import Settings from './blog_settings.json';


const store = createStore(
  reducer,
  defaultState,
  applyMiddleware(thunk)
);
const post = TestPosts.data[0];
const page = TestPosts.data[1];
post.attributes.type = "post";
page.attributes.type = "page";
store.dispatch({
  type: 'SET_STATE',
  state: new Map({
    posts: new List(TestPosts.data),
    pages: new Map(TestPosts.links),
    settings: new Map(Settings),
    post: post,
    page: page
  }),
});

setupApi(store.dispatch);

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Index} />
    <Route path="/categories/" component={Wrapper} />
    <Route path="/tags/" component={Wrapper} />
    <Route path="/:page" component={Index} />
    <Route path="/posts/:id" component={Post} />
    <Route path="/pages/:name" component={Post} />
  </Route>
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
);
