import React from 'react'
import PureComponent from './components/PureComponent'
import Index from './components/blog/Index'
import ThemeColor from './components/ThemeColor'
import Header from './components/Header'
import './App.css';

import TestPosts from './test_posts.json'

class App extends PureComponent {
  get posts() {
    return TestPosts.data
  }
  get pages() {
    return TestPosts.links
  }
  render() {
    return (
      <div className="container">
        <ThemeColor name="white"/>
        <Header />
        <Index pages={this.pages} posts={this.posts}/>
      </div>
    );
  }
}

export default App;
