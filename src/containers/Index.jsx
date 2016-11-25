import React from 'react';
import Post from '../components/IndexPost';

export default React.createClass({
  getPosts: function() {
    return this.props.posts || [];
  },
  render: function() {
    return <div className="index">
      {this.getPosts().map(post =>
        <Post key={post.id} post={post} />
      )}
    </div>;
  }
});