import React from 'react'
import PureComponent from '../PureComponent'
import Helmet from 'react-helmet'
import Title from './Title'
import {Map} from 'immutable'
import {connect} from 'react-redux';
import {isMainPage} from '../../code/Utils'

class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.properties({
      menu: Array,
      title: String
    });
  }
  render() {
    return (
        <header>
          <Helmet title={this.title}/>
          <nav>
            <ul>
              { this.menu.map(item =>
                <li key={item.id}><a href={item.url}>{item.name}</a></li>
              )}
            </ul>
          </nav>
          <Title />
        </header>
    );
  }
}

function mapStateToProps(state) {
  const settings = state.get('settings');
  const post = state.get('post') || new Map();
  return {
    title: isMainPage() ? settings.get("title") : post.attributes.title,
    menu: settings.get("menu")
  };
}
const ConnectedHeader = connect(mapStateToProps)(Header);

export default ConnectedHeader
export {Header}
