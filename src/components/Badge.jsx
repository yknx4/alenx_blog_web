import React from 'react'
import PureComponent from './PureComponent'

class Badge extends PureComponent {
  render() {
    const badge = this.props.badge;
    return (
      <i><a href={badge.url}><i className={`fa ${badge['fa-class']}`}></i></a></i>
    );
  }
}

export default Badge;