import React from 'react'
import PureComponent from './components/PureComponent'
import Index from './components/blog/Index'
import ThemeColor from './components/ThemeColor'
import Header from './components/Header'
import './App.css';

import TestPosts from './test_posts.json'

import {createStore} from 'redux';
import reducer from './reducers/reducer';
import {Provider} from 'react-redux';
import Settings from './blog_settings.json'

import {List, Map} from 'immutable';

const store = createStore(reducer);
store.dispatch({
  type: 'SET_STATE',
  state: Map({
    posts: List(TestPosts.data),
    pages: Map(TestPosts.links),
    settings: Map(Settings)
  })
});

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <ThemeColor name="white"/>
          <Header menu={Settings.menu} title={Settings.title}/>
          <Index />
        </div>
      </Provider>
    );
  }
}

export default App;
