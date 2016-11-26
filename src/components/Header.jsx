import React from 'react'
import PureComponent from './PureComponent'
import Settings from '../blog_settings.json'
import Helmet from 'react-helmet'
import Badge from './Badge'

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
          <h1 className="brand">{Settings.title}<small>{Settings.subtitle}</small></h1>
          <aside>
            <p dangerouslySetInnerHTML={{__html: Settings.tagline}} />
            <p>
              { Settings.badges.map(badge =>
                <Badge key={badge.id} badge={badge}/>
              )}
            </p>
          </aside>
        </header>
    ); //TODO: Refactor title to multiple titles based on content
  }
}

export default Header;
