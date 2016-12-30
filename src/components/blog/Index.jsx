import React from 'react';
import Post from './IndexPost';
import PureComponent from '../PureComponent'
import Pagination from './Pagination'
import _ from 'lodash'
import {connect} from 'react-redux'
import {Seq} from 'immutable'

class Index extends PureComponent {
  constructor(props) {
    super(props);
    this.properties({
      posts: Seq,
      pages: Seq
    });

    this.parameters({
      page: 1
    });
  }
  render() {
    return (
      <section id="article-listing" >
        {this.posts.toJS().map(post =>
          <Post key={post.id} post={post} />
        )}
        <Pagination page={this.page} pages={this.pages} />
      </section>
    );
  }
}

function mapStateToProps(state) {
  const api = state.get('api');
  return {
    posts: api.getIn(['posts', 'data']),
    pages: api.get('pages')
  };
}

const ConnectedIndex = connect(mapStateToProps)(Index);

export default ConnectedIndex
export {Index}
