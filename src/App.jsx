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
  get settings() {
    return store.getState().get('settings') || new Map();
  }
  get themeColor() {
    return this.settings.get('themeColor') || "white";
  }
  get menu() {
    return this.settings.get('menu') || []
  }
  get title() {
    return this.settings.get('title') || "No Title"
  }
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <ThemeColor name={this.themeColor}/>
          <Header menu={this.menu} title={this.title}/>
          <Index />
        </div>
      </Provider>
    );
  }
}

export default App;
