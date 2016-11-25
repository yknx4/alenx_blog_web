import React from 'react';
import Post from '../components/IndexPost';
import PureComponent from '../components/PureComponent'

class Index extends PureComponent {
  getPosts() {
    return this.props.posts || [];
  }
  render() {
    return (
      <section id="article-listing" >
        {this.getPosts().map(post =>
          <Post key={post.id} post={post} />
        )}
      </section>
    );
  }
}

export default Index;