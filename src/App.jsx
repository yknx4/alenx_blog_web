import React, { Component } from 'react';
import PostsIndex from './PostsIndex'
import './App.css';

class App extends Component {
  posts() {
    return require('./test_posts.json').data
  }
  render() {
    return (
      <div className="App">
        <PostsIndex posts={this.posts()}/>
      </div>
    );
  }
}

export default App;
