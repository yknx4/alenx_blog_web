import React from 'react';
import PureComponent from '../PureComponent'
import {connect} from 'react-redux'
import StateHelper from '../../code/StateHelper'

class Author extends PureComponent {
  render() {
    return <span>{this.props.name}</span>
  }
}

Author.propTypes = {
  name: React.PropTypes.string,
  id: React.PropTypes.string.required
};
Author.defaultProps = {
  name: ""
};

//TODO: TEST THIS CLASS

function mapStateToProps(state, props) {
  const stateHelper = new StateHelper(state);
  return {
    name: stateHelper.getUser(props.id).getIn(['attributes', 'name'], "Unknown Author")
  };
}

const ConnectedAuthor = connect(mapStateToProps)(Author);

export default ConnectedAuthor
export {Author}
