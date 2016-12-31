import React from 'react'
import PureComponent from '../PureComponent'
import Helmet from 'react-helmet'
import Title from './Title'
import {Map} from 'immutable'
import {connect} from 'react-redux';
import {isMainPage} from '../../code/Utils'
import Settings from '../../blog_settings.json'

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
          <Helmet title={this.props.title}/>
          <nav>
            <ul>
              { this.menu.map(item =>
                <li key={item.id}><a href={Settings.baseurl + item.url}>{item.name}</a></li>
              )}
            </ul>
          </nav>
          <Title />
        </header>
    );
  }
}

function mapStateToProps(state) {
  const settings = state.getIn(['app', 'settings']);
  // debugger
  const post = state.get('post') || new Map();
  return {
    // title: isMainPage() ? settings.get("title") : post.attributes.title,
    title: "asd",
    menu: settings.get("menu")
  };
}
const ConnectedHeader = connect(mapStateToProps)(Header);

export default ConnectedHeader
export {Header}
