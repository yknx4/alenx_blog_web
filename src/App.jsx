import React from 'react'
import PureComponent from './components/PureComponent'
import Index from './containers/Index'
import ThemeColor from './components/ThemeColor'
import Header from './components/Header'
import './App.css';

class App extends PureComponent {
  posts() {
    return require('./test_posts.json').data
  }
  render() {
    return (
      <div className="container">
        <ThemeColor name="white"/>
        <Header />
        <Index posts={this.posts()}/>
      </div>
    );
  }
}

export default App;
