import React from 'react';
import Post from './IndexPost';
import PureComponent from '../PureComponent'
import Pagination from '../Pagination'

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

export default Index;