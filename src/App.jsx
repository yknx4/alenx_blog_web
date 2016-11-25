import React, { Component } from 'react';
import PostsIndex from './PostsIndex'
import Helmet from "react-helmet";
import Settings from './blog_settings.json'
import ThemeColor from './components/ThemeColor'
import './App.css';

class App extends Component {
  posts() {
    return require('./test_posts.json').data
  }
  render() {
    return (
      <div className="App">
        <ThemeColor name="white"/>
        <Helmet title={Settings.title}/>
        <PostsIndex posts={this.posts()}/>
      </div>
    );
  }
}

export default App;
