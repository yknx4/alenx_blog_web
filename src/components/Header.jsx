import React from 'react'
import PureComponent from './PureComponent'
import Settings from '../blog_settings.json'
import Helmet from 'react-helmet'
import Badge from './Badge'
import Title from './header/Title'

class Header extends PureComponent {
  title() {
    return this.props.title || Settings.title
  }
  render() {
    return (
        <header>
          <Helmet title={this.title()}/>
          <nav>
            <ul>
              { Settings.menu.map(item =>
                <li key={item.id}><a href={item.url}>{item.name}</a></li>
              )}
            </ul>
          </nav>
          <Title />
        </header>
    );
  }
}

export default Header;
