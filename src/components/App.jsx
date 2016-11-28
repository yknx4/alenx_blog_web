import React from 'react'
import ThemeColor from './ThemeColor'
import Header from './header/Header'
import {connect} from 'react-redux';
import enablePropertyAccessors from '../code/PropertyAccessors'

class App extends React.Component {
  constructor(props) {
    super(props);
    enablePropertyAccessors(this);
    this.properties({
      themeColor: String,
      children: <span/>
    });
  }
  render() {
    return (
      <div className="container">
        <ThemeColor name={this.themeColor}/>
        <Header />
        { this.props.children }
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
