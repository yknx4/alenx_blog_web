import React from 'react'
import PureComponent from '../PureComponent'
import Helmet from 'react-helmet'
import Title from './Title'
import {List} from 'immutable'
import {connect} from 'react-redux';
import {isMainPage} from '../../code/Utils'
import Settings from '../../blog_settings.json'
import StateHelper from '../../code/StateHelper'
import _ from 'lodash'

class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.properties({
      title: String
    });
  }
  get menu() {
    return this.props.menu.toJS();
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

Header.propTypes = {
  menu: React.PropTypes.object
};
Header.defaultProps = {
  menu: new List()
};

function mapStateToProps(state) {
  const settings = state.getIn(['app', 'settings']);
  const stateHelper = new StateHelper(state);
  const post = stateHelper.getCurrentPost();
  return {
    title: isMainPage()? settings.get("title") : post.getIn(['attributes', 'title'], ""),
    menu: settings.get("menu")
  };
}
const ConnectedHeader = connect(mapStateToProps)(Header);

export default ConnectedHeader
export {Header}
