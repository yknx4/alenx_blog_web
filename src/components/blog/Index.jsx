import React from 'react';
import Post from './IndexPost';
import PureComponent from '../PureComponent'
import Pagination from '../Pagination'
import {connect} from 'react-redux';

class Index extends PureComponent {
  get posts() {
    return this.props.posts || [];
  }
  get pages() {
    return this.props.pages || [];
  }
  render() {
    return (
      <section id="article-listing" >
        {this.posts.map(post =>
          <Post key={post.id} post={post} />
        )}
        <Pagination pages={this.pages} />
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.get('posts'),
    pages: state.get('pages')
  };
}

const ConnectedIndex = connect(mapStateToProps)(Index);

export default ConnectedIndex
export {Index}