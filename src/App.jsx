import React from 'react'
import PureComponent from './components/PureComponent'
import Index from './components/blog/Index'
import ThemeColor from './components/ThemeColor'
import Header from './components/Header'
import {connect} from 'react-redux';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.properties({
      themeColor: String
    });
  }
  render() {
    return (
      <div className="container">
        <ThemeColor name={this.themeColor}/>
        <Header />
        <Index />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const settings = state.get('settings');
  return {
    themeColor: settings.get("themeColor"),
  };
}
const ConnectedApp = connect(mapStateToProps)(App);

export default ConnectedApp
export {App}
